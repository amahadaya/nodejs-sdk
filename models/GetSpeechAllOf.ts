/**
 * FreeClimb API
 * FreeClimb is a cloud-based application programming interface (API) that puts the power of the Vail platform in your hands. FreeClimb simplifies the process of creating applications that can use a full range of telephony features without requiring specialized or on-site telephony equipment. Using the FreeClimb REST API to write applications is easy! You have the option to use the language of your choice or hit the API directly. Your application can execute a command by issuing a RESTful request to the FreeClimb API. The base URL to send HTTP requests to the FreeClimb REST API is: /apiserver. FreeClimb authenticates and processes your request.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@freeclimb.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { GrammarType } from './GrammarType';
import { PerclCommand } from './PerclCommand';
import { URI } from './URI';
import { HttpFile } from '../http/http';


interface AttributeType {
    name: string
    baseName: string
    type: string
    format: string
    defaultValue: any
}
interface ArgumentsType {
    'actionUrl': URI;
    'grammarType'?: GrammarType;
    'grammarFile': string;
    'grammarRule'?: string;
    'playBeep'?: boolean;
    'prompts'?: Array<PerclCommand>;
    'noInputTimeoutMs'?: number;
    'recognitionTimeoutMs'?: number;
    'confidenceThreshold'?: number;
    'sensitivityLevel'?: number;
    'speechCompleteTimeoutMs'?: number;
    'speechIncompleteTimeoutMs'?: number;
    'privacyMode'?: boolean;
}
export class GetSpeechAllOf {
    /**
    * When the caller has finished speaking or the command has timed out, FreeClimb will make a POST request to this URL. A PerCL response is expected to continue handling the call.
    */
    'actionUrl': URI;
    'grammarType'?: GrammarType;
    /**
    * The grammar file to use for speech recognition. If grammarType is set to URL, this attribute is specified as a download URL.
    */
    'grammarFile': string;
    /**
    * The grammar rule within the specified grammar file to use for speech recognition. This attribute is optional if `grammarType` is `URL` and ignored if `grammarType` is `BUILTIN`.
    */
    'grammarRule'?: string;
    /**
    * Indicates whether a beep should be played just before speech recognition is initiated so that the speaker can start to speak.
    */
    'playBeep'?: boolean;
    /**
    * The JSON array of PerCL commands to nest within the `GetSpeech` command. The `Say`, `Play`, and `Pause` commands can be used. The nested actions are executed while FreeClimb is waiting for input from the caller. This allows for playing menu options to the caller and to prompt for the expected input. These commands stop executing when the caller begins to input speech.
    */
    'prompts'?: Array<PerclCommand>;
    /**
    * When recognition is started and there is no speech detected for `noInputTimeoutMs` milliseconds, the recognizer will terminate the recognition operation.
    */
    'noInputTimeoutMs'?: number;
    /**
    * When playback of prompts ends and there is no match for `recognitionTimeoutMs` milliseconds, the recognizer will terminate the recognition operation.
    */
    'recognitionTimeoutMs'?: number;
    /**
    * When a recognition resource recognizes a spoken phrase, it associates a confidence level with that match. Parameter `confidenceThreshold` specifies what confidence level is considered a successful match. Values are between 0.0 and 1.0.
    */
    'confidenceThreshold'?: number;
    /**
    * The speech recognizer supports a variable level of sound sensitivity. The sensitivityLevel attribute allows for filtering out background noise, so it is not mistaken for speech. Values are between 0.0 and 1.0 
    */
    'sensitivityLevel'?: number;
    /**
    * Parameter `speechCompleteTimeoutMs` specifies the length of silence required following user speech before the speech recognizer finalizes a result. This timeout applies when the recognizer currently has a complete match against an active grammar. Reasonable speech complete timeout values are typically in the range of 0.3 seconds to 1.0 seconds.
    */
    'speechCompleteTimeoutMs'?: number;
    /**
    * Parameter `speechIncompleteTimeoutMs` specifies the length of silence following user speech after which a recognizer finalizes a result. This timeout applies when the speech prior to the silence is an incomplete match of all active grammars. Timeout `speechIncompleteTimeoutMs` is usually longer than `speechCompleteTimeoutMs` to allow users to pause mid-utterance.
    */
    'speechIncompleteTimeoutMs'?: number;
    /**
    * Parameter privacyMode will not log the `text` as required by PCI compliance.
    */
    'privacyMode'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: AttributeType[] = [
        {
            "name": "actionUrl",
            "baseName": "actionUrl",
            "type": "URI",
            "format": "uri",
            
            
            "defaultValue": undefined
        },
        {
            "name": "grammarType",
            "baseName": "grammarType",
            "type": "GrammarType",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "grammarFile",
            "baseName": "grammarFile",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "grammarRule",
            "baseName": "grammarRule",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "playBeep",
            "baseName": "playBeep",
            "type": "boolean",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "prompts",
            "baseName": "prompts",
            "type": "Array<PerclCommand>",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "noInputTimeoutMs",
            "baseName": "noInputTimeoutMs",
            "type": "number",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "recognitionTimeoutMs",
            "baseName": "recognitionTimeoutMs",
            "type": "number",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "confidenceThreshold",
            "baseName": "confidenceThreshold",
            "type": "number",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "sensitivityLevel",
            "baseName": "sensitivityLevel",
            "type": "number",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "speechCompleteTimeoutMs",
            "baseName": "speechCompleteTimeoutMs",
            "type": "number",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "speechIncompleteTimeoutMs",
            "baseName": "speechIncompleteTimeoutMs",
            "type": "number",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "privacyMode",
            "baseName": "privacyMode",
            "type": "boolean",
            "format": "",
            
            
            "defaultValue": undefined
        }    ];

    static getAttributeTypeMap(): AttributeType[] {
        return GetSpeechAllOf.attributeTypeMap;
    }

    public constructor(args: ArgumentsType) {
        const preparedArgs = GetSpeechAllOf.attributeTypeMap.reduce((acc: Partial<ArgumentsType>, attr: AttributeType) => {
            const val = args[attr.name as keyof ArgumentsType] ?? attr.defaultValue
            if (val !== undefined) {
                acc[attr.name as keyof ArgumentsType] = val
            }
            return acc
        }, {})
        Object.assign(this, preparedArgs)
    }
}

