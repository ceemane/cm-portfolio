"use client";

import { useState, useEffect, useCallback } from "react";

interface TokenData {
  id: string;
  label: string;
  createdAt: number;
  expiresAt: number;
  visits: number;
  lastVisit: number | null;
  expired: boolean;
  expiresIn: number;
}

export default function AdminPage() {
  const [secret, setSecret] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [tokens, setTokens] = useState<TokenData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // New token form
  const [label, setLabel] = useState("");
  const [days, setDays] = useState(14);
  const [generatedLink, setGeneratedLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const fetchTokens = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/tokens", {
        headers: { Authorization: `Bearer ${secret}` },
      });
      if (!res.ok) {
        if (res.status === 401) {
          setAuthenticated(false);
          setError("Invalid secret");
          return;
        }
        throw new Error("Failed to fetch");
      }
      const data = await res.json();
      setTokens(data.tokens);
    } catch {
      setError("Failed to load tokens");
    } finally {
      setLoading(false);
    }
  }, [secret]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthenticated(true);
    await fetchTokens();
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneratedLink("");
    setCopied(false);
    try {
      const res = await fetch("/api/admin/tokens", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secret}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          label: label || undefined,
          days,
        }),
      });
      if (!res.ok) throw new Error("Failed to generate");
      const data = await res.json();
      setGeneratedLink(data.link);
      setLabel("");
      fetchTokens();
    } catch {
      setError("Failed to generate token");
    }
  };

  const handleRevoke = async (id: string) => {
    if (!confirm("Revoke this token? The recipient will lose access.")) return;
    try {
      const res = await fetch("/api/admin/tokens", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${secret}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error("Failed to revoke");
      fetchTokens();
    } catch {
      setError("Failed to revoke token");
    }
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyTokenLink = async (id: string) => {
    const link = `${window.location.origin}/auth/verify?token=${id}`;
    await navigator.clipboard.writeText(link);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  useEffect(() => {
    if (authenticated) fetchTokens();
  }, [authenticated, fetchTokens]);

  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fbfbfd] px-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <div className="mb-2 text-3xl font-semibold tracking-tight text-[#1d1d1f]">CM</div>
            <p className="text-sm text-[#86868b]">Admin Access</p>
          </div>
          {error && (
            <p className="mb-4 text-center text-sm text-red-500">{error}</p>
          )}
          <input
            type="password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="Admin secret"
            className="mb-4 w-full rounded-lg border border-[#e5e5e7] bg-white px-4 py-3 text-sm text-[#1d1d1f] outline-none focus:border-[#b8860b] transition-colors"
            autoFocus
          />
          <button
            type="submit"
            className="w-full rounded-full bg-[#1d1d1f] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fbfbfd] px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">
              Token Manager
            </h1>
            <p className="mt-1 text-sm text-[#86868b]">
              Generate and manage portfolio access links
            </p>
          </div>
          <a
            href="/"
            className="text-sm text-[#86868b] transition-colors hover:text-[#1d1d1f]"
          >
            &larr; Portfolio
          </a>
        </div>

        {error && (
          <p className="mb-4 text-sm text-red-500">{error}</p>
        )}

        {/* Generate Token */}
        <div className="mb-8 rounded-2xl border border-[#e5e5e7] bg-white p-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#b8860b]">
            Generate New Link
          </h2>
          <form onSubmit={handleGenerate} className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="flex-1">
              <label className="mb-1 block text-xs text-[#86868b]">
                Recipient Label
              </label>
              <input
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder="e.g. Jane Smith, Acme Corp"
                className="w-full rounded-lg border border-[#e5e5e7] bg-[#fbfbfd] px-4 py-2.5 text-sm text-[#1d1d1f] outline-none focus:border-[#b8860b] transition-colors"
              />
            </div>
            <div className="w-24">
              <label className="mb-1 block text-xs text-[#86868b]">
                Days
              </label>
              <input
                type="number"
                value={days}
                onChange={(e) => setDays(parseInt(e.target.value) || 14)}
                min={1}
                max={90}
                className="w-full rounded-lg border border-[#e5e5e7] bg-[#fbfbfd] px-4 py-2.5 text-sm text-[#1d1d1f] outline-none focus:border-[#b8860b] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-[#1d1d1f] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
            >
              Generate
            </button>
          </form>

          {generatedLink && (
            <div className="mt-4 rounded-lg border border-[#b8860b]/20 bg-[#b8860b]/5 p-4">
              <p className="mb-2 text-xs font-medium text-[#b8860b]">
                Share this link with the recipient:
              </p>
              <div className="flex items-center gap-2">
                <code className="flex-1 overflow-x-auto text-xs text-[#1d1d1f]">
                  {generatedLink}
                </code>
                <button
                  onClick={copyLink}
                  className="flex-shrink-0 rounded-lg bg-[#b8860b] px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-80"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Token List */}
        <div className="rounded-2xl border border-[#e5e5e7] bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#b8860b]">
              Active Tokens
            </h2>
            <button
              onClick={fetchTokens}
              className="text-xs text-[#86868b] transition-colors hover:text-[#1d1d1f]"
            >
              {loading ? "Loading..." : "Refresh"}
            </button>
          </div>

          {tokens.length === 0 && !loading && (
            <p className="py-8 text-center text-sm text-[#86868b]">
              No tokens yet. Generate one above.
            </p>
          )}

          <div className="divide-y divide-[#e5e5e7]">
            {tokens.map((t) => (
              <div key={t.id} className="flex items-center justify-between py-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="truncate text-sm font-medium text-[#1d1d1f]">
                      {t.label}
                    </p>
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${
                        t.expired
                          ? "bg-red-50 text-red-600"
                          : "bg-green-50 text-green-700"
                      }`}
                    >
                      {t.expired ? "Expired" : `${t.expiresIn}d left`}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-[#86868b]">
                    {t.visits} visit{t.visits !== 1 ? "s" : ""}
                    {t.lastVisit
                      ? ` · Last: ${new Date(t.lastVisit).toLocaleDateString()}`
                      : " · Never visited"}
                    {" · "}
                    <span className="font-mono">{t.id.slice(0, 8)}...</span>
                  </p>
                </div>
                <div className="ml-4 flex flex-shrink-0 items-center gap-2">
                  <button
                    onClick={() => copyTokenLink(t.id)}
                    className="rounded-lg px-3 py-1.5 text-xs text-[#b8860b] transition-colors hover:bg-[#b8860b]/10"
                  >
                    {copiedId === t.id ? "Copied!" : "Copy Link"}
                  </button>
                  <button
                    onClick={() => handleRevoke(t.id)}
                    className="rounded-lg px-3 py-1.5 text-xs text-red-500 transition-colors hover:bg-red-50"
                  >
                    Revoke
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
