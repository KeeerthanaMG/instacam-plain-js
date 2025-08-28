import { useState } from "react";
import { X, Upload, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UploadModal = ({ isOpen, onClose }: UploadModalProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { toast } = useToast();

  if (!isOpen) return null;

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    // TODO: connect to backend
    // await fetch("/api/posts/", { method: "POST", ... });
    
    toast({
      title: "Post uploaded!",
      description: "Your post has been shared successfully.",
    });

    // Reset form
    setSelectedFile(null);
    setCaption("");
    setPreviewUrl(null);
    onClose();
  };

  const handleClose = () => {
    setSelectedFile(null);
    setCaption("");
    setPreviewUrl(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card rounded-xl w-full max-w-md mx-4 modal-shadow">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold">Create new post</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* File Upload */}
          {!previewUrl ? (
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground mb-4">Select photos and videos to share</p>
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <Button variant="default" className="btn-instagram">
                  Select from computer
                </Button>
              </label>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Preview */}
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-64 object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setSelectedFile(null);
                    setPreviewUrl(null);
                  }}
                  className="absolute top-2 right-2 bg-black/20 hover:bg-black/40 text-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Caption */}
              <Textarea
                placeholder="Write a caption..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="resize-none"
                rows={3}
              />

              {/* Upload Button */}
              <Button 
                onClick={handleUpload}
                className="w-full btn-instagram"
                disabled={!selectedFile}
              >
                Share
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};