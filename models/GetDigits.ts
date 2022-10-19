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

import { AddToConference } from './AddToConference';
import { CreateConference } from './CreateConference';
import { Dequeue } from './Dequeue';
import { Enqueue } from './Enqueue';
import { GetDigitsAllOf } from './GetDigitsAllOf';
import { GetSpeech } from './GetSpeech';
import { Hangup } from './Hangup';
import { OutDial } from './OutDial';
import { Park } from './Park';
import { Pause } from './Pause';
import { PerclCommand } from './PerclCommand';
import { Play } from './Play';
import { PlayEarlyMedia } from './PlayEarlyMedia';
import { RecordUtterance } from './RecordUtterance';
import { Redirect } from './Redirect';
import { Reject } from './Reject';
import { RemoveFromConference } from './RemoveFromConference';
import { Say } from './Say';
import { SendDigits } from './SendDigits';
import { SetListen } from './SetListen';
import { SetTalk } from './SetTalk';
import { Sms } from './Sms';
import { StartRecordCall } from './StartRecordCall';
import { TerminateConference } from './TerminateConference';
import { Unpark } from './Unpark';
import { HttpFile } from '../http/http';

/**
* The `GetDigits` command collects DTMF inputs from the caller. It is only supported only when there is a single party on the Call. `GetDigits` is a Terminal Command — any actions following it are never executed. When the Caller is done entering the digits, FreeClimb submits that data to the provided `actionUrl` using an HTTP POST request. Your server will be required to respond to the FreeClimb Webhook with PerCL to continue handling the call.
*/
interface AttributeType {
    name: string
    baseName: string
    type: string
    format: string
    defaultValue: any
}
interface ArgumentsType {
    'actionUrl': string;
    'digitTimeoutMs'?: number;
    'finishOnKey'?: string;
    'flushBuffer'?: boolean;
    'initialTimeoutMs'?: string;
    'maxDigits'?: number;
    'minDigits'?: number;
    'prompts'?: Array<PerclCommand>;
    'privacyMode'?: boolean;
}
export class GetDigits extends PerclCommand {
    /**
    * When the Caller has finished entering digits, FreeClimb will make an HTTP POST request to this URL. A PerCL response is expected to continue handling the Call. Make sure to keep “http://“ in the URL.
    */
    'actionUrl': string;
    /**
    *  Maximum time in milliseconds that FreeClimb will wait for the Caller to press any digit after the last digit entered, before making a determination that a `timeout` has occurred and moving on to make the request to the actionUrl to submit the results of the `GetDigits` command. This timeout interval begins and resets after each digit entered.
    */
    'digitTimeoutMs'?: number;
    /**
    * Digit that causes the input sequence to be deemed complete. This attribute defers to the `timeout` attribute – so, if a `timeout` occurs, then the command terminates regardless of the value of `finishOnKey`.
    */
    'finishOnKey'?: string;
    /**
    * If set to true, the FreeClimb platform starts with an empty DTMF buffer to store the digits entered by the caller. If set to false, FreeClimb will append the user inputs to the end of the existing digits buffer and will return digits from the start of the digits buffer.
    */
    'flushBuffer'?: boolean;
    /**
    * Maximum time in milliseconds that FreeClimb will wait for the Caller to press the first digit before making a determination that a `timeout` has occurred and moving on to make the request to the `actionUrl` to submit the results of the `GetDigits` command. This timeout interval begins when all nested commands have been fully executed.
    */
    'initialTimeoutMs'?: string;
    /**
    * Maximum number of digits expected in the input. If the terminating digit is not entered and the caller has entered the maximum number of digits allowed, the `GetDigits` command terminates regardless of the value of `finishOnKey`.
    */
    'maxDigits'?: number;
    /**
    * Minimum number of digits expected in the input. If specified, FreeClimb will return the collected digits only if the Caller has entered at least that many digits.
    */
    'minDigits'?: number;
    /**
    * JSON array of PerCL commands to nest within the `GetDigits` command. The `Say`, `Play`, and `Pause` commands can be used. The nested actions are executed while FreeClimb is waiting for input from the Caller.
    */
    'prompts'?: Array<PerclCommand>;
    /**
    * Parameter `privacyMode` will not log the `text` as required by PCI compliance.
    */
    'privacyMode'?: boolean;

    static readonly discriminator: string | undefined = "command";

    static readonly attributeTypeMap: AttributeType[] = [
        {
            "name": "actionUrl",
            "baseName": "actionUrl",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "digitTimeoutMs",
            "baseName": "digitTimeoutMs",
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
            "name": "flushBuffer",
            "baseName": "flushBuffer",
            "type": "boolean",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "initialTimeoutMs",
            "baseName": "initialTimeoutMs",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "maxDigits",
            "baseName": "maxDigits",
            "type": "number",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "minDigits",
            "baseName": "minDigits",
            "type": "number",
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
            "name": "privacyMode",
            "baseName": "privacyMode",
            "type": "boolean",
            "format": "",
            
            
            "defaultValue": undefined
        }    ];

    static getAttributeTypeMap(): AttributeType[] {
        return super.getAttributeTypeMap().concat(GetDigits.attributeTypeMap);
    }

    public constructor(args: ArgumentsType) {
        super({ command: "GetDigits" });
        const preparedArgs = GetDigits.attributeTypeMap.reduce((acc: Partial<ArgumentsType>, attr: AttributeType) => {
            const val = args[attr.name as keyof ArgumentsType] ?? attr.defaultValue
            if (val !== undefined) {
                acc[attr.name as keyof ArgumentsType] = val
            }
            return acc
        }, {})
        Object.assign(this, preparedArgs)
    }
}

