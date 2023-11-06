from django.db import connection
import time

def criar_tabela(dic_csv):
    with connection.cursor() as cursor:
        campos = dic_csv.fieldnames

        campos_renomeados = [campo.replace(" ", "_") for campo in campos]

        tabela_nome = f"input_{int(time.time())}"

        cursor.execute(f"DROP TABLE IF EXISTS {tabela_nome}")

        sql_cria_tabela = f"""
        CREATE TABLE {tabela_nome} (
            id serial PRIMARY KEY,
            {', '.join([campo + ' VARCHAR(255)' for campo in campos_renomeados])}
        )
        """
        cursor.execute(sql_cria_tabela)

        sql_insere_tabela = f"""
        INSERT INTO {tabela_nome} ({', '.join(campos_renomeados)})
        VALUES ({', '.join(['%s' for _ in campos])})
        """

        dados_csv = list(dic_csv)

        values = []
        for linha in dados_csv:
            linha_dados = [linha.get(campo, None) for campo in campos]
            values.append(linha_dados)

        cursor.executemany(sql_insere_tabela, values)
