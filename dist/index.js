"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copy = void 0;
const copy = (text, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (window && navigator.clipboard && window.isSecureContext) {
            yield navigator.clipboard.writeText(text);
            if (callback) {
                callback();
            }
            return true;
        }
        else {
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
                }
                else {
                    return false;
                }
            }
            catch (err) {
                console.error("Error copying text:", err);
                return false;
            }
            finally {
                // Cleanup
                document.body.removeChild(textArea);
            }
        }
    }
    catch (error) {
        console.error("Error copying text:", error);
        return false;
    }
});
exports.copy = copy;
