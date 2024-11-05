import supabase from "./supabase";

// Fetch all comments
export async function getComments() {
  const { data, error } = await supabase
    .from("User Comment")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error("Comments could not be loaded");
  }

  console.log("data", data);

  return data;
}

// Create a new comment
export async function createComment(newComment) {
  const { data, error } = await supabase
    .from("User Comment")
    .insert([
      {
        user: String(newComment.user), // Convert user to JSON string
        comment: String(newComment.comment), // Convert comment to JSON string },
      },
    ])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Comment could not be created");
  }

  return data;
}
