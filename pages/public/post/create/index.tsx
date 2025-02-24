import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { object, string, mixed, InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Card from "@/app/components/Card/Card";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import SingleImageUpload from "@/app/components/SingleImageUpload";
import TextEditor from "@/app/components/TextEditor/TextEditor";
import Wrapper from "@/app/pages/Wrappers/RootWrapper/Wrapper";
import {
  CreatePostFormSchema,
  CreatePostFormSchemaType,
} from "@/app/utils/validation";
import { toast } from "react-toastify";
import { useAxios } from "@/app/context/AxiosContext";

const CreatePostPage: React.FC = () => {
  const axios = useAxios();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreatePostFormSchemaType>({
    resolver: yupResolver(CreatePostFormSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<CreatePostFormSchemaType> = async (data) => {
    let imgId;

    try {
      const formData = new FormData();
      // Send JSON data as a string under key "dto"
      // Append file under key "img" to match your Postman request.
      formData.append("image", data.image as File);
      const response = await axios.post("/images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      imgId = response.data;

      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });
    } catch (error) {
      console.error(error);
      toast.error("Error uploading an image.");
      return;
    }

    try {
      const response = await axios.post("/posts", {
        imageId: imgId,
        title: data.title,
        description: data.description,
      });
      toast.success("Post created successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Error creating post.");
    }
  };

  return (
    <Wrapper>
      <Card className="p-6">
        <h1 className="text-heading3-bold font-bold mb-4">Create Post</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Title</label>
            <Input
              placeholder="Enter title"
              register={register("title")}
              error={errors.title && errors.title.message}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Description</label>
            <TextEditor
              name="description"
              control={control}
              error={errors.description?.message}
              maxHeight={500}
              minHeight={200}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Image</label>
            <SingleImageUpload
              control={control}
              name="image"
              error={errors.image?.message as string}
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" color="success" size="lg">
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
};

export default CreatePostPage;
