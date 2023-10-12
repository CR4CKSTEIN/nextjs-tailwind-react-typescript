"use client";

import { useForm } from "react-hook-form";

const NewCampgroundForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const image = data.imageUrl[0];
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("location", data.location);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("file", image);
      formData.append("upload_preset", "ricoshub");

      // const uploadResponse = await fetch(
      //   "https://api.cloudinary.com/v1_1/dcfnc8ajj/image/upload",
      //   {
      //     method: "POST",
      //     body: formData,
      //   },
      // );
      // const uploadedImageData = await uploadResponse.json();
      // const imageUrl = uploadedImageData.secure_url;
      // console.log(imageUrl);

      // formData.delete("file");
      // formData.delete("upload_preset");
      // console.log(data)

      const res = await fetch("/api/campgrounds", {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const validateInput = (event: any) => {
    const input = event.target;
    const feedbackElement = input.nextElementSibling;
    if (feedbackElement) {
      if (input.value.length > 0) {
        feedbackElement.textContent = "Looks good!";
        feedbackElement.classList.remove("text-red-500");
        feedbackElement.classList.add("text-green-500");
      } else {
        feedbackElement.textContent = "This field is required.";
        feedbackElement.classList.remove("text-green-500");
        feedbackElement.classList.add("text-red-500");
      }
    } else {
      console.warn("Feedback element not found");
    }
  };

  return (
    <section className="bg-white">
      <div className="mx-auto mt-4 flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an New Campground
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Title
                </label>
                <input
                  {...register("title")}
                  type="text"
                  name="title"
                  id="title"
                  onBlur={validateInput}
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                  placeholder="Enter the title"
                />
                <div className="mt-1 text-sm text-green-500"></div>
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Location
                </label>
                <input
                  {...register("location")}
                  type="text"
                  name="location"
                  id="location"
                  onBlur={validateInput}
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                  placeholder="Location, City, or Address"
                />
                <div className="mt-1 text-sm text-green-500"></div>
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Campground Price
                </label>
                <input
                  {...register("price")}
                  type="number"
                  name="price"
                  id="price"
                  onBlur={validateInput}
                  placeholder="0.00"
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                />
                <div className="mt-1 text-sm text-green-500"></div>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Description
                </label>
                <textarea
                  {...register("description")}
                  name="description"
                  id="description"
                  onBlur={validateInput}
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                  placeholder="Enter a description"
                ></textarea>
                <div className="mt-1 text-sm text-green-500"></div>
              </div>
              <div>
                <label
                  htmlFor="file"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Image
                </label>
                <input
                  {...register("imageUrl")}
                  type="file"
                  aria-describedby="file_input_help"
                  id="file_input"
                  accept="image/*"
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="focus:ring-primary-300 w-full cursor-pointer rounded-lg bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4"
              >
                Add Campground
              </button>
              <div>
                <div className="relative mt-10">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCampgroundForm;
