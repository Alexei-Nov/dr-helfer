import React from 'react'
import TitleAndMetaTags from '../components/TitleAndMetaTags/TitleAndMetaTags'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Result from '../components/Result/Result';

export default function ResultPage() {
  const { analysisId } = useSelector(state => state.toolkit);
  if (!analysisId) {
    // return <Navigate to="/" replace />;
  }

  return (
    <>
      <TitleAndMetaTags />
      <Result />
    </>
  )
}
