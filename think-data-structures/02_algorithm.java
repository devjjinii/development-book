package com.jin;

public class Algo {

    public static void swapElements(int[] array, int i, int j) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;  // i 와 j 의 값 swap
    }

    public static int indexLowest(int[] array, int start) {
        int lowIndex = start;
        for (int i = start; i < array.length; i++) {
            if(array[i] < array[lowIndex]) { // 최솟값을 찾고
                lowIndex = i;
            }
        }
        return lowIndex;
    }

    public static void Algo(int[] array) {
        for(int i = 0; i < array.length; i++) {
            int j = indexLowest(array, i);
            swapElements(array, i, j);
        }
        System.out.println(array.length);
    }

    public static void main(String[] args) {
       int[] arr = {1,3,5,7,9,11};
        Algo(arr);
    }
}
