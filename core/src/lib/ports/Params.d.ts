import { SortOrder, OrderBy } from "./Params.ts";

// contains filtering values to use for ordering
declare type RequestOrderParams = {
    // OrderBy is the field to order records by
    OrderBy: OrderBy

    // SortOrder is the order to sort the records by
    SortOrder: SortOrder
}

// parameters that can be passed when fetching records from a database
declare type CommonRequestParams = {
	// IncludedDeleted includes "softly" deleted records in the result of the query
	IncludeDeleted: boolean;

	// Limit is the page size
	Limit: number;

	// Offset is the page number or cursor
	Offset: number;

	// OrderOption contains ordering options for the filter
	OrderOption: RequestOrderParams;
}