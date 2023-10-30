import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { goalListService } from '../../../core/services/goalList.service';

interface FilterOption {
  title: string;
  dataList: IOption[];
  selected: boolean;
}
interface IOption {
  optionName: string;
  checked: boolean;
}

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss'],
})
export class FilterOPtionsComponent implements OnInit {
  filterOptionsList: FilterOption[] = [
    { title: 'Select Title', dataList: [], selected: false },
    { title: 'Select Category', dataList: [], selected: false },
    { title: 'Select Department', dataList: [], selected: false },
    { title: 'Select state', dataList: [], selected: false },
    { title: 'Select Owner', dataList: [], selected: false },
  ];
  checkBoxColor: ThemePalette = 'primary';
  allComplete: boolean = false;

  constructor(private _goalListsevice: goalListService) {}

  ngOnInit(): void {
    this._goalListsevice.getList().subscribe((data) => {
      const titleList = new Set(),
        departmentList = new Set(),
        categoryList = new Set(),
        stateList = new Set(),
        ownerList = new Set();
      data.map((elem) => {
        titleList.add(elem.title);
        categoryList.add(elem.category);
        departmentList.add(elem.department);
        stateList.add(elem.state);
        ownerList.add(elem.owner);
      });

      this.filterOptionsList.forEach((filterOption, index) => {
        const optionList = [
          titleList,
          categoryList,
          departmentList,
          stateList,
          ownerList,
        ][index];
        filterOption.dataList = Array.from(optionList).map((optionName) => {
          return {
            optionName,
            checked: false,
          } as IOption;
        });
      });
    });
  }
  updateDropdownTitle(item: FilterOption): string {
    const selectedCount = item.dataList.filter((elem) => elem.checked).length;
    const optionsCount = item.dataList.length;

    this.updateOptionsListSelection(item, selectedCount);

    if (selectedCount === 0) {
      return item.title;
    } else if (selectedCount === optionsCount) {
      return 'All selected';
    } else if (selectedCount < optionsCount && selectedCount > 1) {
      return 'Multiple selected';
    } else {
      return `${item.dataList.filter((elem) => elem.checked)[0].optionName}`;
    }
  }

  updateOptionsListSelection(item: FilterOption, optionSelected: any) {
    optionSelected > 0 ? (item.selected = true) : (item.selected = false);
  }

  updateAllComplete(item: any) {
    this.allComplete =
      item.dataList != null && item.dataList.every((t) => t.checked);
  }

  someComplete(item: FilterOption): boolean {
    if (item.dataList == null) {
      return false;
    }
    return (
      item.dataList.filter((t) => t.checked).length > 0 && !this.allComplete
    );
  }

  setAll(completed: boolean, item: FilterOption) {
    this.allComplete = completed;
    if (item.dataList == null) {
      return;
    }
    item.dataList.forEach((t) => (t.checked = completed));
  }

  getUniqueValues(item: string): IOption[] {
    let arr: IOption[] = [];
    arr.push({ optionName: item, checked: false });
    return [...new Set(arr)];
  }
}
