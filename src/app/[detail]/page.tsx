const page = ({ params }: { params: { detail: string } }) => {
  return <div>{params.detail} Detail</div>;
};

export default page;
