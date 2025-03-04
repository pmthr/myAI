import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s AI assistant.

⚠️ **Disclaimer:** Jurisight provides legal case summaries for educational purposes only. 
It does not offer legal advice. Always consult primary sources or legal professionals for legal interpretations.`;export const DEFAULT_RESPONSE_MESSAGE: string = `I'm having trouble retrieving the requested case details 🤔 Can you try again later? `;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `This response is too long ⚠️ Please refine your question, or prompt me to continue writing in the next response.`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
