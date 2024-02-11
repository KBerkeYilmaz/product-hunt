import CircularProgres from "@components/ui/CircularProgress";

const loading = () => {
  return (
    <div className="loading w-screen flex flex-col justify-center items-center h-screen">
        <CircularProgres />
    </div>
  );
};

export default loading;
