import TopicCard from "@components/ui/TopicCard";
import { revalidatePath } from "next/cache";

export default async function Home() {
  "use server";
  revalidatePath("/");
  const topics = await fetch("http://localhost:3000/api/topics").then((res) =>
    res.json()
  );


  async function deleteTopicAndRevalidate(topicId) {
    setIsLoading(true); // If you have an isLoading state to show a loading indicator
    try {
      const response = await fetch(`/api/topics/${topicId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Topic deleted successfully');
        // Now revalidate the topic list, assuming you have a function to fetch topics
        await fetchTopics(); // This should re-fetch the topics from your API
      } else {
        console.error('Failed to delete the topic');
      }
    } catch (error) {
      console.error('Error deleting topic:', error);
    }
    setIsLoading(false);
  }
  


  return (
    <main className="flex min-h-screen flex-col items-center justify-center m-auto py-10 bg-blue-500">
      <h1 className="text-4xl font-bold mb-8  px-10">
        Welcome to Product Hunt
      </h1>
      <section className="w-screen px-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {topics.data.map((topic) => (
          <TopicCard
            key={topic._id} // It's important to provide a unique key for list items
            topic_id={topic._id}
            topic_title={topic.title}
            topic_description={topic.description}
            onDelete={deleteTopicAndRevalidate}

          />
        ))}
      </section>
    </main>
  );
}
