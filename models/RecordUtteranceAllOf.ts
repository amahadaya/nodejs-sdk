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

import { HttpFile } from '../http/http';

interface AttributeType {
    name: string
    baseName: string
    type: string
    format: string
    defaultValue: any
}
interface ArgumentsType {
    'actionUrl': string;
    'silenceTimeoutMs'?: number;
    'finishOnKey'?: string;
    'maxLengthSec'?: number;
    'playBeep'?: boolean;
    'autoStart'?: boolean;
    'privacyMode'?: boolean;
}
export class RecordUtteranceAllOf {
    /**
    * URL to which information on the completed recording is submitted. The PerCL received in response is then used to continue with Call processing.
    */
    'actionUrl': string;
    /**
    * Interval of silence that should elapse before ending the recording.
    */
    'silenceTimeoutMs'?: number;
    /**
    * Key that triggers the end of the recording. any digit, '#', or '*'
    */
    'finishOnKey'?: string;
    /**
    * Maximum length for the command execution in seconds.
    */
    'maxLengthSec'?: number;
    /**
    * Indicates whether to play a beep sound before the start of the recording. If set to `false`, no beep is played.
    */
    'playBeep'?: boolean;
    /**
    * If `false`, recording begins immediately after the RecordUtterance command is processed. If `true`, recording begins when audio is present and if audio begins before the `maxLengthSec` timeout. If no audio begins before `maxLengthSec`, no recording is generated.
    */
    'autoStart'?: boolean;
    /**
    * Parameter `privacyMode` will not log the `text` as required by PCI compliance.
    */
    'privacyMode'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: AttributeType[] = [
        {
            "name": "actionUrl",
            "baseName": "actionUrl",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "silenceTimeoutMs",
            "baseName": "silenceTimeoutMs",
            "type": "number",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "finishOnKey",
            "baseName": "finishOnKey",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "maxLengthSec",
            "baseName": "maxLengthSec",
            "type": "number",
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
            "name": "autoStart",
            "baseName": "autoStart",
            "type": "boolean",
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
        return RecordUtteranceAllOf.attributeTypeMap;
    }

    public constructor(args: ArgumentsType) {
        const preparedArgs = RecordUtteranceAllOf.attributeTypeMap.reduce((acc: Partial<ArgumentsType>, attr: AttributeType) => {
            const val = args[attr.name as keyof ArgumentsType] ?? attr.defaultValue
            if (val !== undefined) {
                acc[attr.name as keyof ArgumentsType] = val
            }
            return acc
        }, {})
        Object.assign(this, preparedArgs)
    }
}

