'use client';

import { useState, useEffect } from 'react';

type Language = 'en' | 'hi' | 'bn';

const languageNames: Record<Language, string> = {
  en: 'English',
  hi: 'Hindi (हिंदी)',
  bn: 'Bengali (বাংলা)',
};

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const [content, setContent] = useState('');
  const [originalContent, setOriginalContent] = useState('');
  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'info' | null; message: string }>({ type: null, message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  // Load dictionary content
  const loadDictionary = async (lang: Language) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/save-dictionary?language=${lang}`);
      const data = await response.json();
      if (data.content) {
        const formatted = JSON.stringify(JSON.parse(data.content), null, 2);
        setContent(formatted);
        setOriginalContent(formatted);
        setHasChanges(false);
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to load dictionary' });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadDictionary(selectedLanguage);
    }
  }, [isAuthenticated, selectedLanguage]);

  useEffect(() => {
    setHasChanges(content !== originalContent);
  }, [content, originalContent]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Store password for API calls
    setIsAuthenticated(true);
  };

  const handleSave = async () => {
    setIsLoading(true);
    setStatus({ type: 'info', message: 'Saving...' });

    try {
      // Validate JSON before sending
      JSON.parse(content);

      const response = await fetch('/api/save-dictionary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password,
          language: selectedLanguage,
          content,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Saved successfully! Changes will reflect on the website.' });
        setOriginalContent(content);
        setHasChanges(false);
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to save' });
        if (response.status === 401) {
          setIsAuthenticated(false);
        }
      }
    } catch {
      setStatus({ type: 'error', message: 'Invalid JSON format. Please check your syntax.' });
    }

    setIsLoading(false);
  };

  const handleReset = () => {
    setContent(originalContent);
    setHasChanges(false);
  };

  const formatJSON = () => {
    try {
      const formatted = JSON.stringify(JSON.parse(content), null, 2);
      setContent(formatted);
    } catch {
      setStatus({ type: 'error', message: 'Cannot format: Invalid JSON' });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-blue-900 mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl mb-4 focus:border-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-900 text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">DPGP Content Editor</h1>
          <div className="flex items-center gap-4">
            <a href="/" className="text-blue-200 hover:text-white text-sm">
              View Website
            </a>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-sm bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Language Tabs */}
        <div className="bg-white rounded-xl shadow-md mb-6 p-2 flex gap-2">
          {(['en', 'hi', 'bn'] as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                selectedLanguage === lang
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {languageNames[lang]}
            </button>
          ))}
        </div>

        {/* Status Message */}
        {status.type && (
          <div
            className={`mb-4 p-4 rounded-xl ${
              status.type === 'success'
                ? 'bg-green-100 text-green-800 border border-green-200'
                : status.type === 'error'
                ? 'bg-red-100 text-red-800 border border-red-200'
                : 'bg-blue-100 text-blue-800 border border-blue-200'
            }`}
          >
            {status.message}
          </div>
        )}

        {/* Editor */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Toolbar */}
          <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                Editing: <strong>{languageNames[selectedLanguage]}</strong>
              </span>
              {hasChanges && (
                <span className="text-orange-500 text-sm font-medium">
                  (unsaved changes)
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={formatJSON}
                className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Format JSON
              </button>
              <button
                onClick={handleReset}
                disabled={!hasChanges}
                className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50"
              >
                Reset
              </button>
              <button
                onClick={handleSave}
                disabled={isLoading || !hasChanges}
                className="px-6 py-2 text-sm bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>

          {/* JSON Editor */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-[600px] p-4 font-mono text-sm focus:outline-none resize-none"
            spellCheck={false}
            placeholder={isLoading ? 'Loading...' : 'JSON content will appear here'}
          />
        </div>

        {/* Help */}
        <div className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-3">Quick Guide</h3>
          <ul className="text-sm text-blue-800 space-y-2">
            <li>1. Select a language tab to edit that dictionary</li>
            <li>2. Make your text changes in the JSON editor</li>
            <li>3. Click &quot;Save Changes&quot; to update the website</li>
            <li>4. Changes reflect immediately after page refresh</li>
          </ul>
          <div className="mt-4 text-xs text-blue-600">
            <strong>Tip:</strong> Be careful with JSON syntax. Keep quotes around text values and don&apos;t remove commas between items.
          </div>
        </div>
      </div>
    </div>
  );
}
