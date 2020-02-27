# Script para gerar os inserts em sql lindo dms
import xlrd as xd

# excel's file name
path = 'countCH.xlsx'

# reading the file
wb = xd.open_workbook(path)
response = wb.sheet_by_index(0)

print("-- INSERT INSTO voiceCarbo.alimento VALUES (Nome, Medida, Peso, Kcal, Carboidratos, Grupo);")
# percorring all rows of the excell file
for i in range(response.nrows):
    if i == 0:
        continue
    row = "INSERT INTO voiceCarbo.alimento VALUES ("
    for j in range(response.ncols):
        aux = str(response.cell_value(i,j))
        if aux[-1] == " ":
            aux = aux[:-1]
        if j + 1 == response.ncols:
            row = row + "'" + aux + "'"
        elif j == 0:
            row = row + "'" + aux.lower() + "', "
        else:
            if j in [2,3,4]:
                row = row + aux + ", "
            else:
                row = row + "'" + aux + "', "
    row = row + ");"
    print(row)
