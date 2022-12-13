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
import { GetDigits } from './GetDigits';
import { GetSpeech } from './GetSpeech';
import { Hangup } from './Hangup';
import { OutDial } from './OutDial';
import { Park } from './Park';
import { PauseAllOf } from './PauseAllOf';
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
* The `Pause` command halts execution of the current PerCL script for a specified number of milliseconds. If `Pause` is the first command in a PerCL document, FreeClimb will wait for the specified time to elapse before picking up the call.
*/

interface AttributeType {
    name: string
    baseName: string
    type: string
    format: string
    defaultValue: any
}
interface ArgumentsType {
    'length': number;
}
export class Pause extends PerclCommand {
    /**
    * Length in milliseconds. FreeClimb will wait silently before continuing on.
    */
    'length': number;

    static readonly discriminator: string | undefined = "command";

    static readonly attributeTypeMap: AttributeType[] = [
        {
            "name": "length",
            "baseName": "length",
            "type": "number",
            "format": "",

            
            "defaultValue": undefined
        }    ];

    static getAttributeTypeMap(): AttributeType[] {
        return super.getAttributeTypeMap().concat(Pause.attributeTypeMap);
    }

    public constructor(args: ArgumentsType) {
        super({ command: "Pause" });
        const preparedArgs = Pause.attributeTypeMap.reduce((acc: Partial<ArgumentsType>, attr: AttributeType) => {
            const val = args[attr.name as keyof ArgumentsType] ?? attr.defaultValue
            if (val !== undefined) {
                acc[attr.name as keyof ArgumentsType] = val
            }
            return acc
        }, {})
        Object.assign(this, preparedArgs)
    }
}

