import requests
import pandas as pd

cert_cert = #указать путь к сертификату
cert_key = #указать путь к ключу


def get_data():
    """
    Collecting platforms to DataFrame
    """

    platforms = requests.get('https://test.online.edu.ru/api/partners/v0/platform',
                             cert=(cert_cert, cert_key))
    platforms_list = platforms.json()['rows']

    global_id = []
    title = []
    for platform in platforms_list:
        global_id.append(platform['global_id'])
        title.append(platform['title'])

    data_Platform = pd.DataFrame(list(zip(global_id, title)),
                                 columns=['platform_id', 'title'])

    """
    Collecting institutions to DataFrame
    """

    rightholders = requests.get('https://test.online.edu.ru/api/partners/v0/rightholder',
                                cert=(cert_cert, cert_key))
    rightholders_list = rightholders.json()['rows']

    global_id = []
    short_title = []

    for rightholder in rightholders_list:
        global_id.append(rightholder['global_id'])
        short_title.append(rightholder['short_title'])

    data_Rigthholder = pd.DataFrame(list(zip(global_id, short_title)),
                                    columns=['institution_id', 'title'])

    """
    Collecting onlinecourses to DataFrame
    """

    onlinecourses = requests.get('https://test.online.edu.ru/api/courses/v0/course',
                                 cert=(cert_cert, cert_key))

    # сбор ссылок на все страницы с онлайн курсами
    course_link = 'https://test.online.edu.ru/api/courses/v0/course/'
    course_links = []
    course_links.append(course_link)
    for i in range(1,53):
        new_link = course_link + '?page=' + str(i)
        course_links.append(new_link)

    # сбор id всех онлайн курсов
    course_id = []
    for link in course_links:
        course = requests.get(link,
                              cert=(cert_cert, cert_key))
        courses_list = course.json()['results']
        for i in courses_list:
            course_id.append(i['global_id'])

    title = []
    description = []
    institution = []
    platform = []
    language = []
    started_at = []
    created_at = []
    record_end_at = []
    finished_at = []
    rating = []
    experts_rating = []
    visitors_number = []
    total_visitors_number = []
    duration = []
    volume = []
    intensity_per_week = []
    content = []
    lectures_number = []
    external_url = []
    has_certificate = []
    credits = []

    course_id_field_of_study = []
    field_of_study = []

    course_id_transfer = []
    field_of_study_transfer = []
    institution_transfer = []

    course_id_req = []
    item_req = []

    course_id_learning_outcomes = []
    learning_outcomes = []

    course_comp = []
    competences = []

    # сбор данных по каждому онлайн курсов
    course_link = 'https://test.online.edu.ru/api/courses/v0/course/'
    for i in range(0, len(course_id)):
        current_course_link = course_link + str(course_id[i])
        current_course = requests.get(current_course_link,
                                      cert=(cert_cert, cert_key))
        title.append(current_course.json()['title'])
        description.append(current_course.json()['description'])
        institution.append(current_course.json()['institution_id'])
        platform.append(current_course.json()['partner_id'])
        language.append(current_course.json()['language'])
        started_at.append(current_course.json()['started_at'])
        created_at.append(current_course.json()['created_at'])
        record_end_at.append(current_course.json()['record_end_at'])
        finished_at.append(current_course.json()['finished_at'])
        rating.append(current_course.json()['rating'])
        experts_rating.append(current_course.json()['experts_rating'])
        visitors_number.append(current_course.json()['visitors_number'])
        total_visitors_number.append(current_course.json()['total_visitors_number'])
        duration.append(current_course.json()['duration'])
        volume.append(current_course.json()['volume'])
        intensity_per_week.append(current_course.json()['intensity_per_week'])
        content.append(current_course.json()['content'])
        lectures_number.append(current_course.json()['lectures_number'])
        external_url.append(current_course.json()['registry_url'])
        has_certificate.append(current_course.json()['has_certificate'])
        credits.append(current_course.json()['credits'])

        """
        #Collecting onlinecourse&competences to DataFrame
        """
        course_comp.append(course_id[i])
        competences.append(current_course.json()['competences'])

        """
        Collecting onlinecourse&field_of_study to DataFrame
        """

        for j in current_course.json()['directions']:
            field_of_study.append(j)
            course_id_field_of_study.append(course_id[i])

        """
        Collecting onlinecourse&credit to DataFrame
        """

        for j in current_course.json()['transfers']:
            course_id_transfer.append(course_id[i])
            field_of_study_transfer.append(j['direction_id'])
            institution_transfer.append(j['institution_id'])

        """
        #Collecting onlinecourse&requirements to DataFrame
        """

        for j in current_course.json()['requirements']:
            course_id_req.append(course_id[i])
            item_req.append(j)

        """
        #Collecting onlinecourse&learning_outcome to DataFrame
        """

        for j in current_course.json()['learning_outcomes']:
            course_id_learning_outcomes.append(course_id[i])
            learning_outcomes.append(j)

    data_OnlineCourse = pd.DataFrame(list(zip(course_id, title, description, institution, platform, language, started_at, created_at, record_end_at,
                                             finished_at, rating, experts_rating, visitors_number, total_visitors_number, duration, volume,
                                             intensity_per_week, content, lectures_number, external_url, has_certificate, credits)),
                                      columns=['course_id','title', 'description', 'institution_id', 'platform_id', 'language', 'started_at',
                                               'created_at', 'record_end_at', 'finished_at', 'rating',
                                               'experts_rating', 'visitors_number', 'total_visitors_number',
                                               'duration', 'volume', 'intensity_per_week',
                                               'content', 'lectures_number', 'external_url', 'has_certificate', 'credits'])
    data_OnlineCourse['id_course'] = data_OnlineCourse.index


    data_CourseFieldOfStudy = pd.DataFrame(list(zip(course_id_field_of_study, field_of_study)),
                                           columns=['course_id', 'field_of_study'])



    data_CourseCredit = pd.DataFrame(list(zip(course_id_transfer, institution_transfer, field_of_study_transfer)),
                                     columns=['course_id', 'institution_id', 'field_of_study'])

    data_CourseRequirement = pd.DataFrame(list(zip(course_id_req, item_req)),
                                          columns=['course_id', 'item'])

    data_CourseLearningOutcome = pd.DataFrame(list(zip(course_id_learning_outcomes, learning_outcomes)),
                                              columns=['course_id', 'learning_outcome'])

    data_CourseCompetence = pd.DataFrame(list(zip(course_comp, competences)),
                                         columns=['course_id', 'competences'])

    """
    Adding new id as FK to OnlineCourse
    """

    data_Platform['id_platform'] = data_Platform.index
    data_Rigthholder['id_institution'] = data_Rigthholder.index
    data_online_course_platform = pd.merge(data_OnlineCourse, data_Platform, how='left', on='platform_id')
    data_online_course_platform_inst = pd.merge(data_online_course_platform, data_Rigthholder, how='left', on='institution_id')


    data_online_course_platform_inst.started_at = pd.to_datetime(data_online_course_platform_inst['started_at'],
                                                                 format='%Y-%m-%d', errors='ignore')
    data_online_course_platform_inst.finished_at = pd.to_datetime(data_online_course_platform_inst['finished_at'],
                                                                  format='%Y-%m-%d', errors='ignore')

    data_online_course_platform_inst = data_online_course_platform_inst.fillna(value='None')
    data_OnlineCourse = data_online_course_platform_inst.copy()

    """
    Adding new id as FK to CourseFieldOfStudy
    """
    data_CourseFieldOfStudy = pd.merge(data_CourseFieldOfStudy, data_OnlineCourse[['id_course', 'course_id']],
                                       how='left', on='course_id')

    """
    Adding new id as FK to CourseCredit
    """
    data_CourseCredit = pd.merge(data_CourseCredit, data_OnlineCourse[['id_course', 'course_id']],
                                 how='left', on='course_id')
    data_CourseCredit = pd.merge(data_CourseCredit, data_Rigthholder, how='left', on='institution_id')

    """
    Adding new id as FK to CourseRequirement
    """
    data_CourseRequirement = pd.merge(data_CourseRequirement, data_OnlineCourse[['id_course', 'course_id']],
                                      how='left', on='course_id')
    """
    Adding new id as FK to CourseLearningOutcome
    """
    data_CourseLearningOutcome = pd.merge(data_CourseLearningOutcome, data_OnlineCourse[['id_course', 'course_id']],
                                          how='left', on='course_id')
    """
    Adding new id as FK to CourseCompetence
    """
    data_CourseCompetence = pd.merge(data_CourseCompetence, data_OnlineCourse[['id_course', 'course_id']],
                                     how='left', on='course_id')
    return data_Platform, data_Rigthholder, data_OnlineCourse, data_CourseFieldOfStudy, data_CourseCredit, \
           data_CourseRequirement, data_CourseLearningOutcome, data_CourseCompetence
