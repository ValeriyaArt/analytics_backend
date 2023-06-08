from django.db import transaction

from workprogramsapp.models import DisciplineBlockModuleInIsu, DisciplineBlockModule


def discipline_block_module_object_relations_updater(discipline_block_module_object):
    print('try to start in module updater')

    for module in DisciplineBlockModuleInIsu.objects.filter(module=discipline_block_module_object):
        print('_____________________________-')
        print(module)


@transaction.atomic()
def process_modules(modules: list):
    for isu_module in modules:
        module = DisciplineBlockModuleInIsu.objects.filter(isu_id=int(isu_module['id'])).first()
        print('- Module selected', module)
        print('-- Isu Module ID', isu_module["id"])
        if DisciplineBlockModuleInIsu.objects.filter(isu_id=isu_module['id'],
                                                     isu_father_id=isu_module['parent_id']).exists():
            print('--- Link information available')
            updated_module = DisciplineBlockModuleInIsu.objects.filter(isu_id=isu_module['id'],
                                                                       isu_father_id=isu_module['parent_id']). \
                first().module
            print('--- updated_module', updated_module)
        else:

            new_module = DisciplineBlockModule.objects.create(name=isu_module['name'])
            isu_module_in_db = DisciplineBlockModuleInIsu.objects.create(
                isu_id=isu_module['id'],
                isu_father_id=isu_module['parent_id'],
                module=new_module
            )
            if DisciplineBlockModuleInIsu.objects.filter(isu_id=isu_module['parent_id']).exists():
                isu_father_module = DisciplineBlockModuleInIsu.objects.filter(isu_id=isu_module['parent_id']). \
                    first()
                isu_father_module.module.childs.add(new_module)
                print('--- Trying to USE a child')
            else:
                new_father_module = DisciplineBlockModule.objects.create()
                new_father_module.childs.add(new_module)
                isu_father_module = DisciplineBlockModuleInIsu.objects.create(isu_id=isu_module['parent_id'], module=new_father_module)
                print('--- Trying to create a child')
            updated_module = new_module

        # ToDo: Далее работает с updated_module.