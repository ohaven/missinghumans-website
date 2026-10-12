"use client";
import { useState, useEffect } from "react";

export default function ShareButtons({ text, url }) {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);
  useEffect(() => { setCanShare(typeof navigator !== "undefined" && !!navigator.share); }, []);
  const enc = encodeURIComponent;
  const copy = async () => {
    try { await navigator.clipboard.writeText(`${text}\n${url}`); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch {}
  };
  const native = async () => {
    if (navigator.share) { try { await navigator.share({ text, url }); } catch {} } else copy();
  };
  return (
    <div className="share-row">
      {canShare && (
        <button className="btn btn-primary" onClick={native}>Share…</button>
      )}
      <a className="btn btn-ghost" target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${enc(url)}&quote=${enc(text)}`}>Facebook</a>
      <a className="btn btn-ghost" target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?text=${enc(text)}&url=${enc(url)}`}>X / Twitter</a>
      <a className="btn btn-ghost" target="_blank" rel="noopener noreferrer" href={`sms:?&body=${enc(text + " " + url)}`}>Text message</a>
      <button className="btn btn-ghost" onClick={copy}>{copied ? "Copied!" : "Copy text"}</button>
    </div>
  );
}
