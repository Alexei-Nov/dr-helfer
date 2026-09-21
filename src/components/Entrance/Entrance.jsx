import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setAnalysisId, setFailed } from '../../toolkitRedux/toolkitSlice';
import { createAnalysis } from '../../api/createAnalysis';
import './entrance.css'

export default function Entrance() {
  const [files, setFiles] = useState([]);
  const [inputRef, setInputRef] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (files.length < 2 || loading) return;

    try {
      setLoading(true);

      const formData = new FormData();
      files.forEach(file => {
        formData.append('photos', file);
      });

      const data = await createAnalysis(formData);
      console.log('CREATE ANALYSIS:', data);

      dispatch(setAnalysisId(data.analysis_id));
      navigate('/analytics', { replace: true });
    } catch (error) {
      console.error(error);
      dispatch(setFailed(error.message));
    } finally {
      setLoading(false);
    }
  };

  const openFileDialog = (ref) => {
    ref.current?.click();
  };

  return (
    <section className="section entrance">
      <div className="container">
        <div className="entrance__wrapper">
          <div className="entrance__col">
            <div className="entrance__title text-80 fw-700">
              Проверьте <br />
              <span style={{ color: '#78A82C' }}>состав&nbsp;БАД</span>
            </div>
            <div className="entrance__desc">
              <p>
                Сделайте до 3 фото: лицевой стороны и состава или загрузите из галереи. Весь текст должен быть виден.
              </p>
            </div>
            <div className="entrance__tags">
              <div className="entrance__tag">Без бликов</div>
              <div className="entrance__tag">В фокусе</div>
              <div className="entrance__tag">Весь текст в кадре</div>
            </div>
          </div>
          <div className="entrance__body">
            <form className="entrance__form" onSubmit={handleSubmit}>
              <Upload files={files} onChange={setFiles} openFileDialog={openFileDialog} inputRef={inputRef} setInputRef={setInputRef} />
              {files.length > 0 ? (
                <button
                  type='submit'
                  className={`entrance__btn btn btn_wide ${files.length < 1 ? 'btn_disabled' : ''}`}
                  disabled={files.length < 1}
                >
                  Проанализировать БАД
                </button>
              ) : (
                <div className={`entrance__btn btn btn_wide`}
                  onClick={() => { openFileDialog(inputRef) }}
                >
                  Загрузить фото
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Upload({ files, onChange, openFileDialog, inputRef, setInputRef }) {
  const [previews, setPreviews] = useState([]);
  const currentInputRef = useRef(null);

  useEffect(() => {
    const urls = files.map(file => URL.createObjectURL(file));
    setPreviews(urls);
    setInputRef(currentInputRef)

    return () => {
      urls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [files]);

  const addFiles = (e) => {
    const newFiles = Array.from(e.target.files);

    if (!newFiles.length) return;

    const updated = [...files, ...newFiles].slice(0, 3);
    onChange(updated);

    e.target.value = '';
  };

  const removeFile = (index) => {
    const updated = files.filter((_, i) => i !== index);
    onChange(updated);
  };


  return (
    <div className="upload">
      <input
        ref={currentInputRef}
        className="upload__field"
        name="photos"
        type="file"
        multiple
        accept="image/*"
        onChange={addFiles}
      />

      <div className="upload__wrapper">
        {files.length == 0 &&
          <div className="upload__btn upload__preview" onClick={() => { openFileDialog(inputRef) }} >
            <img src="./img/upload/img-1.png" alt="img" />
          </div>
        }

        {files.length > 0 &&
          <>
            <div className="upload__list">
              {files.map((file, index) => (
                <div className="upload__img" key={`${file.name}-${file.lastModified}-${index}`}>
                  <img src={previews[index]} alt={file.name} />

                  <div className="upload__delete" onClick={() => removeFile(index)}>
                    <img src="/img/entrance/delete.svg" alt="img" />
                  </div>
                </div>
              ))}

              {files.length < 3 &&
                <div className="upload__btn upload__load-more" onClick={() => { openFileDialog(inputRef) }} >
                  <div className="upload__load-more-icon">
                    <img src="/img/entrance/load-more.svg" alt="img" />
                  </div>

                  <div className="upload__load-more-text">
                    Добавить еще <span>1</span> фото
                  </div>
                </div>
              }

            </div>
            <div className="upload__status">
              <div className="upload__status-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#78a82c" />
                  <path d="M7.75004 13.1499L5.12504 10.5249C5.0564 10.4555 4.97465 10.4003 4.88453 10.3627C4.79441 10.325 4.69771 10.3056 4.60004 10.3056C4.50237 10.3056 4.40568 10.325 4.31556 10.3627C4.22544 10.4003 4.14368 10.455 4.07504 10.5249C4.00556 10.5936 3.9504 10.6753 3.91275 10.7655C3.8751 10.8556 3.85571 10.9523 3.85571 11.0499C3.85571 11.1476 3.8751 11.2443 3.91275 11.3344C3.9504 11.4246 4.00556 11.5063 4.07504 11.5749L7.21754 14.7174C7.51004 15.0099 7.98254 15.0099 8.27504 14.7174L16.225 6.77494C16.2945 6.7063 16.3497 6.62455 16.3873 6.53443C16.425 6.44431 16.4444 6.34761 16.4444 6.24994C16.4444 6.15228 16.425 6.05558 16.3873 5.96546C16.3497 5.87534 16.2945 5.79359 16.225 5.72494C16.1564 5.65547 16.0746 5.6003 15.9845 5.56265C15.8944 5.525 15.7977 5.50562 15.7 5.50562C15.6024 5.50562 15.5057 5.525 15.4156 5.56265C15.3254 5.6003 15.2437 5.65547 15.175 5.72494L7.75004 13.1499Z"
                    fill="white" />
                </svg>
              </div>

              <div className="upload__status-wrapper">
                <div>
                  <span className="upload__status-count">
                    {files.length}
                  </span> фото добавлено.
                </div>

                <div className="upload__status-text">
                  {/* {files.length < 2 ? (
										<div>Добавьте еще минимум 1 фото</div>
									) : (
										<div style={{ color: '#78a82c' }}>Можно анализировать</div>
									)} */}
                  <div style={{ color: '#78a82c' }}>Можно анализировать</div>
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
};