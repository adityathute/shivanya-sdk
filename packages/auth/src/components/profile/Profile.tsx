"use client";

import { useEffect, useRef, useState } from "react";
import {
  Avatar,
  blobToFile,
  Button,
  Dropdown,
  ErrorMessage,
  ImageCropperModal,
  Input,
  Textarea,
  useImageCropper,
  cropImage,
  UserIcon,
  Typography,
} from "shivanya-ui";
import {
  digitsOnly,
  getFileSizeError,
  isImageFile,
  normalizeUrl,
  stripUrlProtocol,
  isValidUsername,
} from "shivanya-core";
import { useAuth } from "../../hooks/useAuth";
import { useAuthAction } from "../../hooks/useAuthAction";
import { AuthMessage } from "../shared/AuthMessage";

type AvatarAction = "unchanged" | "upload" | "remove";

export function Profile() {
  const { client, user, refreshUser } = useAuth();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");

  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarAction, setAvatarAction] = useState<AvatarAction>("unchanged");
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const [cropImageUrl, setCropImageUrl] = useState<string | null>(null);
  const [cropOpen, setCropOpen] = useState(false);
  const [fileError, setFileError] = useState("");

  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(
    null,
  );

  const [checkingUsername, setCheckingUsername] = useState(false);

  const cropper = useImageCropper({
    aspectRatio: 1,
    cropShape: "round",
    showGrid: false,
  });

  const { run, loading, error, fieldErrors, setFieldErrors } = useAuthAction(
    async () => {
      await client.updateProfile({
        first_name: firstName,
        last_name: lastName,
        phone,
        date_of_birth: dateOfBirth,
        location,
        website: normalizeUrl(website),
        bio,
        avatar: avatarAction === "upload" ? avatar : undefined,
      });

      if (avatarAction === "remove") {
        await client.removeAvatar();
      }

      if (username !== (user?.username ?? "")) {
        await client.updateUsername(username);
      }

      await refreshUser();
    },
  );

  const hasFieldErrors = Object.keys(fieldErrors).length > 0;

  useEffect(() => {
    if (!user) return;

    setFirstName(user.first_name ?? "");
    setLastName(user.last_name ?? "");
    setUsername(user.username ?? "");
    setPhone(user.phone ?? "");
    setDateOfBirth(user.date_of_birth ?? "");
    setLocation(user.location ?? "");
    setWebsite(stripUrlProtocol(user.website ?? ""));
    setBio(user.bio ?? "");

    setAvatar(null);
    setAvatarAction("unchanged");
    setAvatarPreview(null);
    setFileError("");
    setFieldErrors({});
  }, [user, setFieldErrors]);

  useEffect(() => {
    const value = username.trim().toLowerCase();
    const currentUsername = (user?.username ?? "").toLowerCase();

    if (!value) {
      setUsernameAvailable(null);
      setCheckingUsername(false);
      return;
    }

    if (value === currentUsername) {
      setUsernameAvailable(true);
      setCheckingUsername(false);
      return;
    }

    if (!isValidUsername(value)) {
      setUsernameAvailable(null);
      setCheckingUsername(false);
      return;
    }

    setCheckingUsername(true);
    setUsernameAvailable(null);

    const timeout = window.setTimeout(async () => {
      try {
        const result = await client.checkUsernameAvailability(value);

        setUsernameAvailable(result.valid && result.available);
      } catch {
        setUsernameAvailable(null);
      } finally {
        setCheckingUsername(false);
      }
    }, 400);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [username, user?.username, client]);

  useEffect(() => {
    if (!avatar) {
      setAvatarPreview(null);
      return;
    }

    const url = URL.createObjectURL(avatar);

    setAvatarPreview(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [avatar]);

  useEffect(() => {
    return () => {
      if (cropImageUrl) {
        URL.revokeObjectURL(cropImageUrl);
      }
    };
  }, [cropImageUrl]);

  const hasChanges =
    firstName !== (user?.first_name ?? "") ||
    lastName !== (user?.last_name ?? "") ||
    username !== (user?.username ?? "") ||
    phone !== (user?.phone ?? "") ||
    dateOfBirth !== (user?.date_of_birth ?? "") ||
    location !== (user?.location ?? "") ||
    website !== stripUrlProtocol(user?.website ?? "") ||
    bio !== (user?.bio ?? "") ||
    avatarAction !== "unchanged";

  const hasAvatar = Boolean(user?.avatar);

  const displayAvatar =
    avatarAction === "remove"
      ? undefined
      : (avatarPreview ?? user?.avatar ?? undefined);

  const fullName = `${firstName} ${lastName}`.trim() || user?.email || "User";

  const handleUploadClick = () => {
    setFileError("");
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!isImageFile(file)) {
      setFileError("Please select an image file.");
      event.target.value = "";
      return;
    }

    const sizeError = getFileSizeError(file);

    if (sizeError) {
      setFileError(sizeError);
      event.target.value = "";
      return;
    }

    const url = URL.createObjectURL(file);

    setFileError("");
    setCropImageUrl(url);
    setCropOpen(true);

    cropper.reset();

    event.target.value = "";
  };

  const handleCropClose = () => {
    setCropOpen(false);

    if (cropImageUrl) {
      URL.revokeObjectURL(cropImageUrl);
    }

    setCropImageUrl(null);
    cropper.reset();
  };

  const handleCropSave = async () => {
    if (!cropImageUrl || !cropper.croppedAreaPixels) {
      return;
    }

    const blob = await cropImage(cropImageUrl, cropper.croppedAreaPixels, {
      width: 500,
      height: 500,
      type: "image/jpeg",
      quality: 0.9,
    });

    if (!blob) {
      setFileError("Unable to crop this image.");
      return;
    }

    const croppedFile = blobToFile(blob, "profile-picture.jpg");

    setAvatar(croppedFile);
    setAvatarAction("upload");
    setFileError("");

    setCropOpen(false);

    URL.revokeObjectURL(cropImageUrl);
    setCropImageUrl(null);

    cropper.reset();
  };

  const handleRemoveAvatar = () => {
    setAvatar(null);
    setAvatarAction("remove");
    setAvatarPreview(null);
    setFileError("");
  };

  const reset = async () => {
    setAvatar(null);
    setAvatarAction("unchanged");
    setAvatarPreview(null);
    setFileError("");

    await refreshUser();
  };

  return (
    <div className="shivanya-account-section shivanya-profile">
      <div className="shivanya-profile-header">
        <div className="shivanya-profile-header-info">
          <div className="shivanya-profile-title">
            <span className="shivanya-profile-title-icon">
              <UserIcon size="md" />
            </span>

            <div>
              <Typography as="h3" variant="h3" size="lg" weight="semibold">
                Profile
              </Typography>

              <Typography as="p" variant="body" size="xs" color="muted">
                Manage the information shown across ShivanyaMS.
              </Typography>
            </div>
          </div>
        </div>

        <Dropdown
          placement="bottomEnd"
          variant="ghost"
          radius="sm"
          closeOnSelect
          closeOnOutsideClick
        >
          <Dropdown.Trigger
            className="shivanya-profile-avatar-trigger"
            aria-label="Profile picture options"
          >
            <Avatar src={displayAvatar} name={fullName} size="xl" />
          </Dropdown.Trigger>

          <Dropdown.Content>
            <Dropdown.Item onClick={handleUploadClick}>
              Upload profile
            </Dropdown.Item>

            {hasAvatar && (
              <Dropdown.Item
                className="shivanya-profile-remove-avatar"
                onClick={handleRemoveAvatar}
              >
                Remove profile
              </Dropdown.Item>
            )}
          </Dropdown.Content>
        </Dropdown>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleFileChange}
        />
      </div>

      <ImageCropperModal
        opened={cropOpen}
        image={cropImageUrl ?? undefined}
        crop={cropper.crop}
        zoom={cropper.zoom}
        rotation={cropper.rotation}
        aspectRatio={cropper.aspectRatio}
        cropShape={cropper.cropShape}
        showGrid={cropper.showGrid}
        zoomOptions={{
          defaultValue: 1,
          min: 1,
          max: 3,
          step: 0.01,
        }}
        title="Crop profile picture"
        saveLabel="Crop & use"
        cancelLabel="Cancel"
        onCropChange={cropper.setCrop}
        onZoomChange={cropper.setZoom}
        onRotationChange={cropper.setRotation}
        onCropComplete={cropper.onCropComplete}
        onClose={handleCropClose}
        onSave={handleCropSave}
      />

      {!hasFieldErrors && <AuthMessage message={error} />}

      {fileError && <AuthMessage message={fileError} />}

      {fieldErrors.avatar && <AuthMessage message={fieldErrors.avatar} />}

      <div className="shivanya-profile-fields">
        <div className="shivanya-profile-field">
          <Input
            label="First name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            fullWidth
          />

          {fieldErrors.first_name && (
            <ErrorMessage size="sm" variant="error">
              {fieldErrors.first_name}
            </ErrorMessage>
          )}
        </div>

        <div className="shivanya-profile-field">
          <Input
            label="Last name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            fullWidth
          />

          {fieldErrors.last_name && (
            <ErrorMessage size="sm" variant="error">
              {fieldErrors.last_name}
            </ErrorMessage>
          )}
        </div>

        <div className="shivanya-profile-field">
          <Input
            label="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            autoComplete="new-username"
            fullWidth
          />

          {checkingUsername && (
            <ErrorMessage
              size="sm"
              className="shivanya-profile-username-status"
            >
              Checking username...
            </ErrorMessage>
          )}

          {!checkingUsername &&
            usernameAvailable === false &&
            !fieldErrors.username && (
              <ErrorMessage
                size="sm"
                variant="error"
                className="shivanya-profile-username-status"
              >
                Username is already taken.
              </ErrorMessage>
            )}

          {!checkingUsername &&
            usernameAvailable === true &&
            username.toLowerCase() !== (user?.username ?? "").toLowerCase() && (
              <ErrorMessage
                size="sm"
                variant="success"
                className="shivanya-profile-username-status"
              >
                Username is available.
              </ErrorMessage>
            )}

          {fieldErrors.username && (
            <ErrorMessage size="sm" variant="error">
              {fieldErrors.username}
            </ErrorMessage>
          )}
        </div>

        <div className="shivanya-profile-field">
          <Input
            label="Phone"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            value={phone}
            onChange={(event) => setPhone(digitsOnly(event.target.value))}
            fullWidth
          />

          {fieldErrors.phone && (
            <ErrorMessage size="sm" variant="error">
              {fieldErrors.phone}
            </ErrorMessage>
          )}
        </div>

        <div className="shivanya-profile-field">
          <Input
            label="Date of birth"
            type="date"
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
            fullWidth
          />

          {fieldErrors.date_of_birth && (
            <ErrorMessage size="sm" variant="error">
              {fieldErrors.date_of_birth}
            </ErrorMessage>
          )}
        </div>

        <div className="shivanya-profile-field">
          <Input
            label="Website"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            prefix="https://"
            fullWidth
          />

          {fieldErrors.website && (
            <ErrorMessage size="sm" variant="error">
              {fieldErrors.website}
            </ErrorMessage>
          )}
        </div>

        <div className="shivanya-profile-field shivanya-profile-field-full">
          <Input
            label="Location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            fullWidth
          />

          {fieldErrors.location && (
            <ErrorMessage size="sm" variant="error">
              {fieldErrors.location}
            </ErrorMessage>
          )}
        </div>

        <div className="shivanya-profile-field shivanya-profile-field-full">
          <Textarea
            label="Bio"
            value={bio}
            onChange={(event) => setBio(event.target.value)}
            fullWidth
          />

          {fieldErrors.bio && (
            <ErrorMessage size="sm" variant="error">
              {fieldErrors.bio}
            </ErrorMessage>
          )}
        </div>
      </div>

      <div className="shivanya-profile-actions">
        <Button
          variant="ghost"
          onClick={reset}
          disabled={!hasChanges || loading}
        >
          Reset
        </Button>

        <Button
          loading={loading}
          disabled={
            !hasChanges ||
            loading ||
            checkingUsername ||
            (username !== (user?.username ?? "") && usernameAvailable !== true)
          }
          onClick={() => run()}
        >
          Save changes
        </Button>
      </div>
    </div>
  );
}
