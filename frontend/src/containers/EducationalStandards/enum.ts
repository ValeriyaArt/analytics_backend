export enum fields {
    EDUCATIONAL_STANDARD_LIST = 'EDUCATIONAL_STANDARD_LIST',
    EDUCATIONAL_STANDARD_DIALOG = 'EDUCATIONAL_STANDARD_DIALOG',
    IS_OPEN_DIALOG = 'IS_OPEN_DIALOG',
    DIALOG_DATA = 'DIALOG_DATA',
    SEARCH_QUERY = 'SEARCH_QUERY',
    CURRENT_PAGE = 'CURRENT_PAGE',
    ALL_COUNT = 'ALL_COUNT',
    SORTING = 'SORTING',
    SORTING_FIELD = 'SORTING_FIELD',
    SORTING_MODE = 'SORTING_MODE',
    EDUCATIONAL_STANDARD = 'EDUCATIONAL_STANDARD',
}

export enum fetchingTypes {
    GET_EDUCATIONAL_STANDARDS = 'GET_EDUCATIONAL_STANDARDS',
    GET_EDUCATIONAL_STANDARD = 'GET_EDUCATIONAL_STANDARD',
    DELETE_EDUCATIONAL_STANDARD = 'DELETE_EDUCATIONAL_STANDARD',
    UPDATE_EDUCATIONAL_STANDARD = 'UPDATE_EDUCATIONAL_STANDARD',
    CREATE_EDUCATIONAL_STANDARD = 'CREATE_EDUCATIONAL_STANDARD',
}

export enum EducationalStandardFields {
    ID = 'id',
    TITLE = 'name',
    YEAR = 'standard_date',
}