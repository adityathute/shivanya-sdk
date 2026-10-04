"use client";

import { useEffect, useState } from "react";
import { Avatar, Button, Input, Textarea } from "shivanya-ui";
import { useAuth } from "../../hooks/useAuth";
import { useAuthAction } from "../../hooks/useAuthAction";
import { AuthMessage } from "../shared/AuthMessage";

export function Profile() {
  const { client, user, refreshUser } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const { run, loading, error } = useAuthAction(async () => {
    await client.updateProfile({ first_name: firstName, last_name: lastName, phone, location, website, bio, avatar });
    if (username !== (user?.username ?? "")) await client.updateUsername(username);
    await refreshUser();
  });

  useEffect(() => {
    if (!user) return;
    setFirstName(user.first_name ?? ""); setLastName(user.last_name ?? ""); setUsername(user.username ?? ""); setPhone(user.phone ?? ""); setLocation(user.location ?? ""); setWebsite(user.website ?? ""); setBio(user.bio ?? "");
  }, [user]);

  return <div className="shivanya-account-section"><div className="shivanya-account-section-header"><div><h3>Profile</h3><p>Manage the information shown across ShivanyaMS.</p></div><Avatar src={user?.avatar ?? undefined} name={`${user?.first_name ?? ""} ${user?.last_name ?? ""}`} size="xl" /></div><AuthMessage message={error} /><div className="shivanya-auth-grid-2"><Input label="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} fullWidth /><Input label="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} fullWidth /><Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} fullWidth /><Input label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth /><Input label="Location" value={location} onChange={(e) => setLocation(e.target.value)} fullWidth /><Input label="Website" value={website} onChange={(e) => setWebsite(e.target.value)} fullWidth /></div><Textarea label="Bio" value={bio} onChange={(e) => setBio(e.target.value)} fullWidth /><div className="shivanya-auth-file"><label>Profile picture</label><input type="file" accept="image/*" onChange={(e) => setAvatar(e.target.files?.[0] ?? null)} /></div><div className="shivanya-account-actions"><Button variant="ghost" onClick={() => refreshUser()}>Reset</Button><Button loading={loading} onClick={() => run()}>Save changes</Button></div></div>;
}
