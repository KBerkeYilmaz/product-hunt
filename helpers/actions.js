"use server";

import { revalidatePath } from "next/cache";

export const HandleDelete = async (id) => {
  try {
    const response = await fetch("http://localhost:3000/api/topics", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (response.status === 200) {
      revalidatePath("/");
      console.log("Topic created successfully");
      // Consider redirecting the user or showing a success message.
    } else {
      revalidatePath("/");
      console.log("Something went wrong");
      // Consider showing an error message based on response.
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};
