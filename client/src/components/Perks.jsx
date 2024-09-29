import React from "react";

function Perks({ selected, onChange }) {
  function handleCbClick(e) {
    const { checked, name } = e.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
  }

  return (
    <>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer mt-2 ">
        <input
          type="checkbox"
          checked={selected.includes("Wifi")}
          name="Wifi"
          onChange={handleCbClick}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
          />
        </svg>

        <span>Wifi</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer mt-2 ">
        <input
          type="checkbox"
          checked={selected.includes("Pool")}
          name="Pool"
          onChange={handleCbClick}
        />
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          className="size-6"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M2 20a2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1M2 16a2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1M15 12V4.5a1.5 1.5 0 013 0M9 12V4.5a1.5 1.5 0 00-3 0M15 5H9M9 10h6" />
        </svg>

        <span>Pool</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer mt-2 ">
        <input
          type="checkbox"
          checked={selected.includes("Parking")}
          name="Parking"
          onChange={handleCbClick}
        />
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="1em"
          width="1em"
          className="size-6"
        >
          <path d="M380 704h264c4.4 0 8-3.6 8-8v-84c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v36H428v-36c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v84c0 4.4 3.6 8 8 8zm340-123a40 40 0 1080 0 40 40 0 10-80 0zm239-167.6L935.3 372a8 8 0 00-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 00-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 00-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 003-10.8zM840 517v237H184V517l15.6-43h624.8l15.6 43zM292.7 218.1l.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220l72.7-199.9zM224 581a40 40 0 1080 0 40 40 0 10-80 0z" />
        </svg>

        <span>Parking</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer mt-2 ">
        <input
          type="checkbox"
          checked={selected.includes("TV")}
          name="TV"
          onChange={handleCbClick}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
        <span>TV</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer mt-2 ">
        <input
          type="checkbox"
          checked={selected.includes("Air Conditioner")}
          name="Air Conditioner"
          onChange={handleCbClick}
        />
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 122.88 67.41"
          style={{ enableBackground: "new 0 0 122.88 67.41" }}
          xmlSpace="preserve"
          className="size-7"
        >
          <g>
            <path d="M79.93,51.37c-0.53-0.51-0.32-1.2,0.48-1.54c0.8-0.34,1.87-0.2,2.41,0.3c3.78,3.6,1.96,6.52,0.21,9.32 c-1.32,2.12-2.59,4.15-0.25,6.19c0.57,0.5,0.4,1.19-0.37,1.55c-0.77,0.36-1.86,0.26-2.43-0.24c-3.47-3.03-1.86-5.62-0.17-8.32 C81.22,56.36,82.7,54,79.93,51.37L79.93,51.37z M14.57,28.11h73.65c0.96,0,1.74,0.78,1.74,1.74v12.26h24.13 c1.46,0,2.79-0.6,3.75-1.56c0.96-0.96,1.56-2.29,1.56-3.75V8.8c0-1.46-0.6-2.79-1.56-3.75c-0.96-0.96-2.29-1.56-3.75-1.56H8.8 c-1.46,0-2.79,0.6-3.75,1.56C4.08,6.01,3.48,7.34,3.48,8.8V36.8c0,1.46,0.6,2.79,1.56,3.75c0.96,0.96,2.29,1.56,3.75,1.56h4.03 V29.85C12.83,28.89,13.61,28.11,14.57,28.11L14.57,28.11z M86.48,31.59H16.31v10.09h70.17V31.59L86.48,31.59z M15.21,13.64 c-0.96,0-1.74-0.78-1.74-1.74c0-0.96,0.78-1.74,1.74-1.74h93.74c0.96,0,1.74,0.78,1.74,1.74c0,0.96-0.78,1.74-1.74,1.74H15.21 L15.21,13.64z M98.58,31.99c1.36,0,2.46,1.1,2.46,2.46s-1.1,2.46-2.46,2.46s-2.46-1.1-2.46-2.46S97.23,31.99,98.58,31.99 L98.58,31.99z M108.85,31.99c1.36,0,2.46,1.1,2.46,2.46s-1.1,2.46-2.46,2.46c-1.36,0-2.46-1.1-2.46-2.46S107.49,31.99,108.85,31.99 L108.85,31.99z M8.8,0h105.29c2.42,0,4.62,0.99,6.21,2.58c1.59,1.59,2.58,3.79,2.58,6.21V36.8c0,2.42-0.99,4.62-2.58,6.21 c-1.59,1.59-3.79,2.58-6.21,2.58H8.8c-2.42,0-4.62-0.99-6.21-2.58C0.99,41.42,0,39.22,0,36.8V8.8c0-2.42,0.99-4.62,2.58-6.21 C4.18,0.99,6.38,0,8.8,0L8.8,0z M15.21,21.76c-0.96,0-1.74-0.78-1.74-1.74c0-0.96,0.78-1.74,1.74-1.74h93.74 c0.96,0,1.74,0.78,1.74,1.74c0,0.96-0.78,1.74-1.74,1.74H15.21L15.21,21.76z M21.37,51.37c-0.53-0.51-0.32-1.2,0.48-1.54 c0.8-0.34,1.87-0.2,2.41,0.3c3.78,3.6,1.96,6.52,0.21,9.32c-1.32,2.12-2.59,4.15-0.25,6.19c0.57,0.5,0.4,1.19-0.37,1.55 c-0.77,0.36-1.86,0.26-2.43-0.24c-3.47-3.03-1.86-5.62-0.17-8.32C22.66,56.36,24.13,54,21.37,51.37L21.37,51.37z M36.01,51.37 c-0.53-0.51-0.32-1.2,0.48-1.54c0.8-0.34,1.87-0.2,2.41,0.3c3.78,3.6,1.96,6.52,0.21,9.32c-1.32,2.12-2.59,4.15-0.25,6.19 c0.57,0.5,0.4,1.19-0.37,1.55c-0.77,0.36-1.86,0.26-2.43-0.24c-3.47-3.03-1.86-5.62-0.17-8.32C37.3,56.36,38.77,54,36.01,51.37 L36.01,51.37z M50.65,51.37c-0.53-0.51-0.32-1.2,0.48-1.54c0.8-0.34,1.87-0.2,2.41,0.3c3.78,3.6,1.96,6.52,0.21,9.32 c-1.32,2.12-2.59,4.15-0.25,6.19c0.57,0.5,0.4,1.19-0.37,1.55c-0.77,0.36-1.86,0.26-2.43-0.24c-3.47-3.03-1.86-5.62-0.17-8.32 C51.94,56.36,53.42,54,50.65,51.37L50.65,51.37z M65.29,51.37c-0.53-0.51-0.32-1.2,0.48-1.54c0.8-0.34,1.87-0.2,2.41,0.3 c3.78,3.6,1.96,6.52,0.21,9.32c-1.32,2.12-2.59,4.15-0.25,6.19c0.57,0.5,0.4,1.19-0.37,1.55c-0.77,0.36-1.86,0.26-2.43-0.24 c-3.47-3.03-1.85-5.62-0.17-8.32C66.58,56.36,68.06,54,65.29,51.37L65.29,51.37z" />
          </g>
        </svg>
        <span>Air Conditioner</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer mt-2 ">
        <input
          type="checkbox"
          checked={selected.includes("Gym")}
          name="Gym"
          onChange={handleCbClick}
        />
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 122.88 67.41"
          style={{ enableBackground: "viewBox=0 0 122.88 67.41" }}
          xmlSpace="preserve"
          className="size-7"
        >
          <path d="M60.21,89.08c0.7,0.3,1.03,1.11,0.73,1.82c-0.3,0.7-1.11,1.03-1.82,0.73c-4.63-1.98-7.74-6.1-9.8-11.7 c-4.91-3.04-9.55-4.56-13.93-4.61c-4.16-0.05-8.12,1.23-11.89,3.81c2.2,1.91,4.01,4.28,5.39,7.12c0.34,0.69,0.05,1.52-0.64,1.86 c-0.69,0.34-1.52,0.05-1.86-0.64c-2.04-4.2-5.12-7.2-9.14-9.11c-4.11-1.96-9.24-2.8-15.27-2.63c-0.76,0.02-1.4-0.58-1.42-1.35 c-0.02-0.77,0.58-1.4,1.35-1.42c6.48-0.18,12.02,0.74,16.53,2.89c0.96,0.46,1.87,0.97,2.74,1.53c4.47-3.26,9.22-4.88,14.23-4.83 c4.08,0.05,8.31,1.21,12.7,3.5c-0.21-0.8-0.4-1.61-0.58-2.45c-1.34-6.35-1.85-13.91-1.96-22.05c0.96-0.57,1.88-1.21,2.75-1.9 c0.05,8.69,0.52,16.75,1.93,23.39C51.93,80.98,54.94,86.82,60.21,89.08L60.21,89.08L60.21,89.08z M27.85,19.88 c1.55,0,2.96,0.63,3.97,1.65c1.02,1.02,1.65,2.42,1.65,3.97c0,1.55-0.63,2.96-1.65,3.97c-1.02,1.02-2.42,1.65-3.97,1.65 c-1.55,0-2.96-0.63-3.97-1.65c-1.02-1.02-1.65-2.42-1.65-3.97c0-1.55,0.63-2.96,1.65-3.97C24.89,20.51,26.3,19.88,27.85,19.88 L27.85,19.88z M27.85,9.21c4.5,0,8.57,1.82,11.52,4.77c2.95,2.95,4.77,7.02,4.77,11.52c0,4.5-1.82,8.57-4.77,11.52 c-2.95,2.95-7.02,4.77-11.52,4.77s-8.57-1.82-11.52-4.77c-2.95-2.95-4.77-7.02-4.77-11.52c0-4.5,1.82-8.57,4.77-11.52 S23.35,9.21,27.85,9.21L27.85,9.21z M37.53,15.82c-2.48-2.48-5.9-4.01-9.68-4.01c-3.78,0-7.2,1.53-9.68,4.01 c-2.48,2.48-4.01,5.9-4.01,9.68c0,3.78,1.53,7.2,4.01,9.68c2.48,2.48,5.9,4.01,9.68,4.01c3.78,0,7.2-1.53,9.68-4.01 c2.48-2.48,4.01-5.9,4.01-9.68C41.54,21.72,40.01,18.3,37.53,15.82L37.53,15.82z M27.85,0c14.08,0,25.5,11.42,25.5,25.5 c0,14.08-11.42,25.5-25.5,25.5S2.35,39.59,2.35,25.5c0-7.04,2.86-13.42,7.47-18.03C14.43,2.85,20.81,0,27.85,0L27.85,0z M49.16,25.5c0-11.77-9.54-21.31-21.31-21.31c-5.88,0-11.21,2.38-15.07,6.24c-3.86,3.86-6.24,9.18-6.24,15.07 c0,11.77,9.54,21.31,21.31,21.31S49.16,37.27,49.16,25.5L49.16,25.5z M29.85,23.5c-0.51-0.51-1.22-0.83-2-0.83s-1.49,0.32-2,0.83 c-0.51,0.51-0.83,1.22-0.83,2c0,0.78,0.32,1.49,0.83,2c0.51,0.51,1.22,0.83,2,0.83s1.49-0.32,2-0.83c0.51-0.51,0.83-1.22,0.83-2 C30.68,24.72,30.37,24.01,29.85,23.5L29.85,23.5z M57.19,29.9c6.92,5.86,12.21,13.55,16.14,22.76c4.89,11.46,7.69,25.25,8.94,40.75 c2.2,6.3,3.22,11.4,2.15,15.12c-1.16,4.03-4.5,6.35-10.99,6.72c-16.08,4.09-30.36,6.65-42.5,7.4c-12.28,0.76-22.41-0.33-30.06-3.54 c-0.71-0.29-1.04-1.11-0.75-1.81c0.29-0.71,1.11-1.04,1.81-0.75c7.26,3.04,16.97,4.07,28.84,3.33c11.97-0.74,26.11-3.28,42.09-7.35 l0,0c0.09-0.02,0.18-0.04,0.28-0.04c5.19-0.26,7.8-1.9,8.62-4.72c0.89-3.11-0.09-7.71-2.13-13.53c-0.06-0.14-0.1-0.29-0.11-0.44 c-1.22-15.28-3.95-28.85-8.74-40.05c-3.43-8.04-7.92-14.86-13.67-20.22c0.08-0.78,0.12-1.57,0.12-2.38 C57.22,30.73,57.21,30.31,57.19,29.9L57.19,29.9z" />
        </svg>

        <span>Gym</span>
      </label>
    </>
  );
}

export default Perks;
