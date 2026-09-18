import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  analysisId: null,
  status: 'idle',
  stage: null,
  progress: 0,
  elapsedSeconds: 0,
  result: null,
  resultComparison: null,
  recomendedProduct: null,
  errorCode: null,
};

const toolkitSlice = createSlice({
  name: 'analysis',
  initialState,
  reducers: {
    setAnalysisId: (state, action) => {
      state.analysisId = action.payload;
      state.status = 'processing';
      state.stage = null;
      state.progress = 0;
      state.elapsedSeconds = 0;
      state.result = null;
      state.resultComparison = null;
      state.recomendedProduct = null;
      state.errorCode = null;
    },

    updateProgress: (state, action) => {
      state.status = action.payload.status;
      state.stage = action.payload.stage;
      state.progress = action.payload.progress_percent;
      state.elapsedSeconds = action.payload.elapsed_seconds;
    },

    setDone: (state) => {
      state.status = 'done';
      state.progress = 100;
    },

    setFailed: (state, action) => {
      state.status = 'failed';
      state.errorCode = action.payload;
    },

    setResult: (state, action) => {
      state.result = action.payload;
    },

    setResultComparison: (state, action) => {
      state.resultComparison = action.payload;
    },

    setRecomendedProduct: (state, action) => {
      state.recomendedProduct = action.payload;
    },

    resetAnalysis: () => initialState,
  },
});

export const {
  setAnalysisId,
  updateProgress,
  setDone,
  setFailed,
  setResult,
  setResultComparison,
  setRecomendedProduct,
  resetAnalysis,
} = toolkitSlice.actions;

export default toolkitSlice.reducer;