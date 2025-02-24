import React, { useRef } from "react";
import { Controller } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import InputErrorText from "../InputErrorText/InputErrorText";
import Button from "../Button/Button";
type SingleImageUploadProps = {
  control: any;
  name: string;
  error?: string;
};

const SingleImageUpload: React.FC<SingleImageUploadProps> = ({
  control,
  name,
  error,
}) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  return (
    <div className="single-image-upload">
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => {
          const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
              onChange(file);
            }
          };

          const handleRemove = () => {
            onChange(null);
          };

          return (
            <div>
              <input
                ref={hiddenFileInput}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {value ? (
                <div className="relative inline-block">
                  <img
                    src={URL.createObjectURL(value)}
                    alt="Uploaded preview"
                    className="w-32 h-32 object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={handleRemove}
                    className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                  >
                    <FaTimes size={12} />
                  </button>
                </div>
              ) : (
                <Button
                  type="button"
                  color="empty"
                  onClick={() => hiddenFileInput.current?.click()}
                >
                  Upload Image
                </Button>
              )}
            </div>
          );
        }}
      />
      {error && <InputErrorText error={error} />}
    </div>
  );
};

export default SingleImageUpload;
