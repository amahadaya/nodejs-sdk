# @freeclimb/sdk

@freeclimb/sdk - the NodeJS client package for the FreeClimb API

FreeClimb is a cloud-based application programming interface (API) that puts the power of the Vail platform in your hands. FreeClimb simplifies the process of creating applications that can use a full range of telephony features without requiring specialized or on-site telephony equipment. Using the FreeClimb REST API to write applications is easy! You have the option to use the language of your choice or hit the API directly. Your application can execute a command by issuing a RESTful request to the FreeClimb API. The base URL to send HTTP requests to the FreeClimb REST API is: /apiserver. FreeClimb authenticates and processes your request.

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 
- Build package: org.openapitools.codegen.languages.TypeScriptClientCodegen
For more information, please visit [https://www.freeclimb.com/support/](https://www.freeclimb.com/support/)

## Installing

```sh
npm install @freeclimb/sdk@3.0.0
or 
yarn add @freeclimb/sdk@3.0.0
```

## Getting Started 

```typescript
import { freeclimb } from '@freeclimb/sdk';

const configuration = freeclimb.createConfiguration({
  accountId: 'YOUR_ACCOUND_ID',
  apiKey: 'YOUR_API_KEY'
});
const apiInstance = new freeclimb.DefaultApi(configuration);

apiInstance.listApplications().then(applications => console.log('got applications', applications))
```

## Detailed SDK documentation
For more details on how to use the individual methods on the sdk - go [here](DefaultApi.md)
