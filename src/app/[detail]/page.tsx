import DetailPage from "@/components/pages/DetailPage";

const Detail = ( { params }: { params: { detail: string } } ) => {
  return <DetailPage urlName={params.detail} />;
};

export default Detail;
