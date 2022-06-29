export enum fields {
    ACADEMIC_PLAN_UPDATE_LOG_LIST = 'ACADEMIC_PLAN_UPDATE_LOG_LIST',
    UPDATED_ACADEMIC_PLANS_LIST = 'UPDATED_ACADEMIC_PLANS_LIST',
    UPDATED_ACADEMIC_PLANS_DIALOG = 'UPDATED_ACADEMIC_PLANS_DIALOG',
    IS_OPEN_DIALOG = 'IS_OPEN_DIALOG',
    DIALOG_DATA = 'DIALOG_DATA',
    SCHEDULER_CONFIGURATION = 'SCHEDULER_CONFIGURATION',

    LOGS_SEARCH_QUERY = 'LOGS_SEARCH_QUERY',
    LOGS_CURRENT_PAGE = 'LOGS_CURRENT_PAGE',
    LOGS_ALL_COUNT = 'LOGS_ALL_COUNT',
    LOGS_SORTING = 'LOGS_SORTING',
    LOGS_SORTING_FIELD = 'LOGS_SORTING_FIELD',
    LOGS_SORTING_MODE = 'LOGS_SORTING_MODE',

    UPDATED_PLANS_SEARCH_QUERY = 'UPDATED_PLANS_SEARCH_QUERY',
    UPDATED_PLANS_CURRENT_PAGE = 'UPDATED_PLANS_CURRENT_PAGE',
    UPDATED_PLANS_ALL_COUNT = 'UPDATED_PLANS_ALL_COUNT',
    UPDATED_PLANS_SORTING = 'UPDATED_PLANS_SORTING',
    UPDATED_PLANS_SORTING_FIELD = 'UPDATED_PLANS_SORTING_FIELD',
    UPDATED_PLANS_SORTING_MODE = 'UPDATED_PLANS_SORTING_MODE',
}

export enum fetchingTypes {
    GET_ACADEMIC_PLAN_UPDATE_LOGS = 'GET_ACADEMIC_PLAN_UPDATE_LOGS',
    GET_UPDATED_ACADEMIC_PLANS = 'GET_UPDATED_ACADEMIC_PLANS',
    CREATE_ACADEMIC_PLAN_UPDATE_CONFIGURATION = 'CREATE_ACADEMIC_PLAN_UPDATE_CONFIGURATION',
    UPDATE_ACADEMIC_PLANS = 'UPDATE_ACADEMIC_PLANS',
    UPDATE_ACADEMIC_PLAN_UPDATE_CONFIGURATION = 'UPDATE_ACADEMIC_PLAN_UPDATE_CONFIGURATION',
    UPDATE_SCHEDULER_CONFIGURATION = 'UPDATE_SCHEDULER_CONFIGURATION',
    GET_SCHEDULER_CONFIGURATION = 'GET_SCHEDULER_CONFIGURATION'
}

export enum AcademicPlanUpdateLogFields {
    ID = 'id',
    ACADEMIC_PLAN_ID = 'academic_plan_id',
    OBJECT_TYPE = 'object_type',
    FIELD_NAME = 'field_name',
    NEW_VALUE = 'new_value',
    OLD_VALUE = 'old_value',
    UPDATED_DATE_TIME = 'updated_date_time'
}

export enum SchedulerConfigurationFields {
   EXECUTION_HOURS = 'execution_hours',
   DAYS_INTERVAL = 'days_interval'
}

export enum UpdatedAcademicPlanFields {
    ID = 'id',
    ACADEMIC_PLAN_ID = 'academic_plan_id',
    ACADEMIC_PLAN_TITLE = 'academic_plan_title',
    UPDATES_ENABLED = 'updates_enabled',
    UPDATED_DATE_TIME = 'updated_date_time'

}
