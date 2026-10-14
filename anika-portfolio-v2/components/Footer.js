import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <span>{profile.name}, {profile.city}, {new Date().getFullYear()}</span>
        <span className="footer-links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          <a href={profile.resume} target="_blank" rel="noopener">Resume</a>
        </span>
      </div>
    </footer>
  );
}
