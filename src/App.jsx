import { useState, useEffect } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showCryingGif, setShowCryingGif] = useState(false);
  const [letterOpened, setLetterOpened] = useState(false); // Track if letter is opened
  const [confirmingYes, setConfirmingYes] = useState(false); // Track if user is confirming "Yes"
  const [pranked, setPranked] = useState(false); // Track if user has been pranked

  const yesButtonSize = noCount * 20 + 16;

  // Background Music
  useEffect(() => {
    const audio = new Audio(""); // Replace with actual music link
    audio.loop = true;
    audio.play();
  }, []);

  const handleNoClick = () => {
    setNoCount((prevCount) => prevCount + 1);
    setShowCryingGif(true); // Show Crying Pikachu when "No" is clicked
  };

  const getNoButtonText = () => {
    const phrases = [
      "No", "😐", "jajaja I knew you were gonna do that", "Youre lying😭!", "Stop trolling!",
      "bruh moment?", "You'll regret this😡!", "Baka!!!!", "Meanie butt☹️", "I'LL EXPLODE!",
      "Wow okay be like that!", "ok..", "k..", "Okay not funny", "What do you call a French man wearing sandals?",
      "Philipe Fallop..:(", "Come on that was a good one?", "YEAH im gonna poop on you  ;(", "Gonna make you eat it", "Pls"
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const handleYesClick = () => {
    if (noCount <= 20) {
      setConfirmingYes(true); // Show confirmation dialog if "Yes" is clicked
    } else {
      setPranked(true); // If user exceeds 20 "No" clicks, show the prank page
    }
  };

  const handleConfirmYes = () => {
    setYesPressed(true);
    setConfirmingYes(false); // Proceed to the next action or page
  };

  const handleCancelYes = () => {
    setConfirmingYes(false); // Reset confirmation and let the user click "Yes" again
  };

  const handleBackToStart = () => {
    window.location.reload(); // Refresh to go back to the start page
  };

  if (pranked) {
    return (
      <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen bg-pink-200 selection:bg-rose-600 selection:text-white text-zinc-900">
        <div className="text-3xl md:text-5xl font-bold text-center mb-8 animate__fadeIn">
          You just WALKED THE PRANK
        </div>
        <button
          onClick={handleBackToStart}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Back to Start
        </button>
      </div>
    );
  }

  if (!letterOpened) {
    return (
      <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen bg-pink-200 selection:bg-rose-600 selection:text-white text-zinc-900">
        <div className="text-3xl md:text-5xl font-bold text-center mb-8 animate__fadeIn">
          You've got a letter from a secret admirer🤔🙊
        </div>
        <button
          onClick={() => setLetterOpened(true)} // This opens the main page
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Open Letter
        </button>
      </div>
    );
  }

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen bg-pink-200 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" className="animate__animated animate__fadeIn" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            I love you so much baby💘💘
          </div>
          <div className="animate__animated animate__bounceIn">🎉🎉🎉</div>
        </>
      ) : (
        <>
          <img
            src="https://pngimg.com/uploads/hello_kitty/hello_kitty_PNG25.png"
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28 animate__animated animate__bounceIn"
          />
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjdhYWExa3ozaTFwa2Nkdm02MjB6ZWU2cnZjNHd6OHVsZTFjOWxmaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/8ZPdJ9KclyWDuxh1U2/giphy.gif"
            className="fixed bottom-16 animate-pulse md:right-24 right-10 md:w-40 w-32 z-20"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src={
              showCryingGif
                ? "https://www.icegif.com/wp-content/uploads/2024/02/icegif-815.gif"
                : "https://gifdb.com/images/thumbnail/cute-hello-kitty-sticker-love-you-card-urptm0td2fy38a2x.gif"
            }
          />
          <h1 className="text-4xl md:text-6xl my-8 text-center animate__animated animate__shakeX">
            WILL YOU BE MY VALENTINE?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            {noCount <= 20 && (
              <button
                className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4 animate__animated animate__zoomIn`}
                style={{ fontSize: yesButtonSize }}
                onClick={handleYesClick}
              >
                Yes
              </button>
            )}
            {noCount <= 20 && (
              <button
                onClick={handleNoClick}
                className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4 animate__animated animate__shakeY"
              >
                {getNoButtonText()}
              </button>
            )}
            {noCount > 20 && (
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4 animate__animated animate__zoomIn"
                onClick={handleYesClick}
              >
                Yes
              </button>
            )}
          </div>

          {/* Confirmation dialog */}
          {confirmingYes && !pranked && (
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-pink-500">Are you sure?</h2>
              <div className="mt-4 flex gap-4">
                <button
                  onClick={handleConfirmYes}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Confirm
                </button>
                <button
                  onClick={handleCancelYes}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
