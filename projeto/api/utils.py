import csv
from django.apps import apps

""" def process_uploaded_csv(csv_file, table_name):
    # Leitura e processamento do arquivo CSV
    csv_data = csv.DictReader(csv_file.read().decode('utf-8').splitlines())

    # Obtenha o modelo de tabela dinâmica (ou crie um novo)
    DynamicTable = apps.get_model(app_label='api', model_name='DynamicTable')

    # Crie uma nova instância de tabela dinâmica
    dynamic_table = DynamicTable.objects.create(name=table_name)

    # Insira os dados na tabela dinâmica
    for row in csv_data:
        dynamic_data = DynamicTableData(table=dynamic_table, data=row)
        dynamic_data.save()

    # Retorna o objeto da tabela dinâmica recém-criada
    return dynamic_table  """