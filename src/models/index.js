// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SomeDataModel } = initSchema(schema);

export {
  SomeDataModel
};