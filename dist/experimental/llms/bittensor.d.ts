import { BaseLLMParams, LLM } from "../../llms/base.js";
export interface BittensorInput extends BaseLLMParams {
    systemPrompt?: string | null | undefined;
    topResponses?: number | undefined;
}
/**
 * Class representing the Neural Internet language model powerd by Bittensor, a decentralized network
 * full of different AI models.
 * To analyze API_KEYS and logs of you usage visit
 *      https://api.neuralinternet.ai/api-keys
 *      https://api.neuralinternet.ai/logs
 */
export declare class NIBittensorLLM extends LLM implements BittensorInput {
    static lc_name(): string;
    systemPrompt: string;
    topResponses: number | undefined;
    constructor(fields?: BittensorInput);
    _llmType(): string;
    /** Call out to NIBittensorLLM's complete endpoint.
     Args:
         prompt: The prompt to pass into the model.
  
         Returns: The string generated by the model.
  
     Example:
     let response = niBittensorLLM.call("Tell me a joke.");
     */
    _call(prompt: string): Promise<string>;
    identifyingParams(): {
        systemPrompt: string | null | undefined;
        topResponses: number | undefined;
    };
}
