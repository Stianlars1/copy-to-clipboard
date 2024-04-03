export const copy = async (
  text: string,
  callback?: () => void
): Promise<boolean> => {
  try {
    if (window && navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      if (callback) {
        callback();
      }
      return true;
    } else {
      // Fallback for older browsers
      let textArea = document.createElement("textarea");
      textArea.value = text;

      // Avoid scrolling to bottom in Safari
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        // Attempt to use execCommand for clipboard actions
        let successful = document.execCommand("copy");
        if (successful) {
          if (callback) {
            callback();
          }
          return true;
        } else {
          return false;
        }
      } catch (err) {
        console.error("Error copying text:", err);
        return false;
      } finally {
        // Cleanup
        document.body.removeChild(textArea);
      }
    }
  } catch (error) {
    console.error("Error copying text:", error);
    return false;
  }
};
