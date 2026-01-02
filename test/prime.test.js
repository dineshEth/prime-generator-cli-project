import { describe, it, expect } from "vitest";
import {
  primeBtwnStartEndHALF,
  primeBtwnStartEndSQRT,
  primeBtwnStartSEIVE,
  fastestHalfNumbers,
  fastestSqrt,
  fastestSOE
} from "./logic/index.js";

// Test data
  const testCases = [
    {
      name: 'small range with primes',
      start: 1,
      end: 10,
      expected: [2, 3, 5, 7]
    },
    {
      name: 'range with no primes',
      start: 24,
      end: 28,
      expected: []
    },
    {
      name: 'single prime number',
      start: 7,
      end: 7,
      expected: [7]
    },
    {
      name: 'range starting from 2',
      start: 2,
      end: 20,
      expected: [2, 3, 5, 7, 11, 13, 17, 19]
    },
    {
      name: 'larger range',
      start: 50,
      end: 100,
      expected: [53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
    },
    {
      name: 'range with large primes',
      start: 100,
      end: 120,
      expected: [101, 103, 107, 109, 113]
    }
  ];

describe('Prime Generator Strategies', () => {

  // test case for BHN
  describe('primeBtwnStartEndHALF (Half Numbers Method)', () => {
    testCases.forEach(({ name, start, end, expected }) => {
      it(`should correctly generate primes for ${name}`, () => {
        const result = primeBtwnStartEndHALF(start, end);
        expect(result).toEqual(expected);
      });
    });

    it('should handle edge case: start equals end (prime)', () => {
      const result = primeBtwnStartEndHALF(11, 11);
      expect(result).toEqual([11]);
    });

    it('should handle edge case: start equals end (non-prime)', () => {
      const result = primeBtwnStartEndHALF(12, 12);
      expect(result).toEqual([]);
    });

    it('should return empty array for range below 2', () => {
      const result = primeBtwnStartEndHALF(1, 1);
      expect(result).toEqual([]);
    });
  });

  // test case for fastest BHN
  describe('fastestHalfNumber (Half Numbers Method)', () => {
    testCases.forEach(({ name, start, end, expected }) => {
      it(`should correctly generate primes for ${name}`, () => {
        const result = fastestHalfNumbers(start, end);
        expect(result).toEqual(expected);
      });
    });

    it('should handle edge case: start equals end (prime)', () => {
      const result = fastestHalfNumbers(11, 11);
      expect(result).toEqual([11]);
    });

    it('should handle edge case: start equals end (non-prime)', () => {
      const result = fastestHalfNumbers(12, 12);
      expect(result).toEqual([]);
    });

    it('should return empty array for range below 2', () => {
      const result = fastestHalfNumbers(1, 1);
      expect(result).toEqual([]);
    });
  });

  // test case for BSN
  describe('primeBtwnStartEndSQRT (Square Root Method)', () => {
    testCases.forEach(({ name, start, end, expected }) => {
      it(`should correctly generate primes for ${name}`, () => {
        const result = primeBtwnStartEndSQRT(start, end);
        expect(result).toEqual(expected);
      });
    });

    it('should handle edge case: start equals end (prime)', () => {
      const result = primeBtwnStartEndSQRT(11, 11);
      expect(result).toEqual([11]);
    });

    it('should handle edge case: start equals end (non-prime)', () => {
      const result = primeBtwnStartEndSQRT(12, 12);
      expect(result).toEqual([]);
    });

    it('should return empty array for range below 2', () => {
      const result = primeBtwnStartEndSQRT(1, 1);
      expect(result).toEqual([]);
    });
  });

  // test case for fastest BSN
  describe('fastestSqrt (Square Root Method)', () => {
    testCases.forEach(({ name, start, end, expected }) => {
      it(`should correctly generate primes for ${name}`, () => {
        const result = fastestSqrt(start, end);
        expect(result).toEqual(expected);
      });
    });

    it('should handle edge case: start equals end (prime)', () => {
      const result = fastestSqrt(11, 11);
      expect(result).toEqual([11]);
    });

    it('should handle edge case: start equals end (non-prime)', () => {
      const result = fastestSqrt(12, 12);
      expect(result).toEqual([]);
    });

    it('should return empty array for range below 2', () => {
      const result = fastestSqrt(1, 1);
      expect(result).toEqual([]);
    });
  });

  // test case for SOE
  describe('primeBtwnStartSEIVE (Sieve of Eratosthenes Method)', () => {
    testCases.forEach(({ name, start, end, expected }) => {
      it(`should correctly generate primes for ${name}`, () => {
        const result = primeBtwnStartSEIVE(start, end);
        expect(result).toEqual(expected);
      });
    });

    it('should handle edge case: start equals end (prime)', () => {
      const result = primeBtwnStartSEIVE(11, 11);
      expect(result).toEqual([11]);
    });

    it('should handle edge case: start equals end (non-prime)', () => {
      const result = primeBtwnStartSEIVE(12, 12);
      expect(result).toEqual([]);
    });

    it('should return empty array for range below 2', () => {
      const result = primeBtwnStartSEIVE(1, 1);
      expect(result).toEqual([]);
    });

    it('should efficiently handle large ranges', () => {
      const result = primeBtwnStartSEIVE(1, 1000);
      expect(result.length).toBe(168); // There are 168 primes below 1000
      expect(result[0]).toBe(2);
      expect(result[result.length - 1]).toBe(997);
    });
  });

  // test case for fastest SOE
  describe('fastestSoe (Sieve of Eratosthenes Method)', () => {
    testCases.forEach(({ name, start, end, expected }) => {
      it(`should correctly generate primes for ${name}`, () => {
        const result = fastestSOE(start, end);
        expect(result).toEqual(expected);
      });
    });

    it('should handle edge case: start equals end (prime)', () => {
      const result = fastestSOE(11, 11);
      expect(result).toEqual([11]);
    });

    it('should handle edge case: start equals end (non-prime)', () => {
      const result = fastestSOE(12, 12);
      expect(result).toEqual([]);
    });

    it('should return empty array for range below 2', () => {
      const result = fastestSOE(1, 1);
      expect(result).toEqual([]);
    });

    it('should efficiently handle large ranges', () => {
      const result = fastestSOE(1, 1000);
      expect(result.length).toBe(168); // There are 168 primes below 1000
      expect(result[0]).toBe(2);
      expect(result[result.length - 1]).toBe(997);
    });
  });
});
