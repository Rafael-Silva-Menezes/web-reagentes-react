/* eslint-disable dot-notation */
interface ReceivedContent {
  list: any[];
  fieldsToSearch: string[];
  filter: string;
}

export default function filterListByText({
  list,
  fieldsToSearch,
  filter,
}: ReceivedContent): any[] {
  const filteredList: any[] = [];
  if (filter === '') {
    return list;
  }
  for (let i = 0; i < list.length; i++) {
    const value = filter.toLowerCase();
    for (let j = 0; j < fieldsToSearch.length; j++) {
      if (list[i][fieldsToSearch[j]].toLowerCase().includes(value))
        filteredList.push(list[i]);
    }
  }
  return filteredList;
}
