import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

const CreateBlog = () => {
  const user = useSelector((state) => state.auth.user);
  const loading = false;
  return (
    <Card>
      <CardContent className="flex text-center items-center justify-center flex-col">
        <CardHeader className="font-bold">Create New Post</CardHeader>
        <div className="flex gap-3 items-center">
          <Avatar>
            <AvatarImage
              src={user?.profilePicture || "https://github.com/shadcn.png"}
              alt="User Profile Picture"
            />
            <AvatarFallback>
              {user?.name ? user.name.charAt(0).toUpperCase() : "CN"}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-semibold text-xs">{user?.name}</h1>
            <span className="text-xs text-gray-600">
              {user?.bio || "No bio available"}
            </span>
          </div>
        </div>

        <Textarea
          className="focus-visible:ring-transparent border-none"
          placeholder="Write a caption..."
        />

        <div className="w-full h-64 flex items-center justify-center my-2">
          <img
            src="https://github.com/shadcn.png"
            alt="preview_image"
            className="h-full object-contain w-full rounded-md"
          />
        </div>

        <input type="file" className="hidden" accept="image/*" />

        <Button className="w-fit mx-auto bg-[#0095f6] hover:bg-[#1b80c3]">
          Select from computer
        </Button>

        <Button className="w-full mt-4">
          {loading ? (
            <>
              <Loader2 className="mr-4 h-4 w-4 animate-spin" />
              Please wait...
            </>
          ) : (
            "Post"
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CreateBlog;
