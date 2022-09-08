import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type SomeDataModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class SomeDataModel {
  readonly id: string;
  readonly Roberto?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SomeDataModel, SomeDataModelMetaData>);
  static copyOf(source: SomeDataModel, mutator: (draft: MutableModel<SomeDataModel, SomeDataModelMetaData>) => MutableModel<SomeDataModel, SomeDataModelMetaData> | void): SomeDataModel;
}