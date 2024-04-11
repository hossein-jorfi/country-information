"use client";
import { CountryType } from "@/constants/types";
import { initialData } from "@/lib/features/mainSlice";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

type DataDispatcherProps = {
  data: CountryType[];
};

const DataDispatcher = ({ data }: DataDispatcherProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialData(data));
  }, []);
  return null;
};

export default DataDispatcher;
