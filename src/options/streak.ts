import { streakButton, streakCounter, streakTooltip } from "./elements";
import toast from "../utils/toast";

streakButton.addEventListener("click", () => {
  toast("Streak copied to clipboard! 🎉");

  streakTooltip.textContent = "Copied!";

  setTimeout(() => {
    streakTooltip.textContent = "Copy streak";
  }, 2000);

  if (streakCounter.textContent == "0") {
    navigator.clipboard.writeText(
      "Estou começando minha sequência na extensão TimeGuardian agora!🚀\n\nExperimente na Google Web Store"
    );
  } else {
    navigator.clipboard.writeText(
      `Minha sequência atual na extensão TimeGuardian é ${streakCounter.textContent}! 🎯 \n\nTry it at Google Web Store or Firefox Store\n`
    );
  }
});
