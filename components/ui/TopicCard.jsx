import CardMenu from "./CardMenu";
const TopicCard = ({ topic_id,topic_title, topic_description }) => {




  return (
    <div className="bg-white p-4 rounded-md shadow-md text-black min-h-44 w-full relative">
      <div className="w-full">
        <CardMenu topic_id={topic_id}/>
        <h2 className="text-xl font-bold mb-4 w-full">{topic_title}</h2>
        <p className="w-full">{topic_description}</p>
      </div>
    </div>
  );
};

export default TopicCard;
