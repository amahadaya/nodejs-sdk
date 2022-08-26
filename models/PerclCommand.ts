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
import { Pause } from './Pause';
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
import { HttpFile } from '../http/http';

/**
* An individual command used in a PerCLScript.
*/
interface AttributeType {
    name: string
    baseName: string
    type: string
    format: string
    defaultValue: any
}
interface ArgumentsType {
    'command'?: string;
}
export class PerclCommand {
    /**
    * Name of PerCL Command (this is automatically derived from mapping configuration and should not be manually supplied in any arguments)
    */
    'command'?: string;

    static readonly discriminator: string | undefined = "command";

    static readonly attributeTypeMap: AttributeType[] = [
        {
            "name": "command",
            "baseName": "command",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        }    ];

    static getAttributeTypeMap(): AttributeType[] {
        return PerclCommand.attributeTypeMap;
    }

    public constructor(args: ArgumentsType) {
        const preparedArgs = PerclCommand.attributeTypeMap.reduce((acc: Partial<ArgumentsType>, attr: AttributeType) => {
            const val = args[attr.name as keyof ArgumentsType] ?? attr.defaultValue
            if (val !== undefined) {
                acc[attr.name as keyof ArgumentsType] = val
            }
            return acc
        }, {})
        Object.assign(this, preparedArgs)
    }
    public toPerclObject() {
        const reduce = (acc: any, attr: AttributeType) => {
            let val = this[attr.name as keyof PerclCommand] ?? attr.defaultValue
            if (val instanceof Array) {
                val = val.map(v => v instanceof PerclCommand ? v.toPerclObject() : v)
            } else if (val instanceof PerclCommand) {
                val = val.toPerclObject()
            }
            if (val != undefined) {
                acc[attr.name] = val
            }
            return acc
        }
        const attrs = (this.constructor as typeof PerclCommand).getAttributeTypeMap().reduce(reduce, {})
        delete attrs['command']
        return { [this.command as string]: attrs }
    }
}

