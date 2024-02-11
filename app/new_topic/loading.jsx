import CircularProgress from "@components/ui/CircularProgress";

const loading = () => {
  return (
    <div className="loading w-screen flex flex-col justify-center items-center h-screen">
      <CircularProgress />
    </div>
  );
};

export default loading;
