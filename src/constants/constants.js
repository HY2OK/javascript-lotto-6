export const EXCEPTION = Object.freeze({
  LOTTO_MUST_SIX_NUMBERS: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_MUST_IN_RANGE: '[ERROR] 로또 번호는 1부터 45까지의 정수입니다.',
  LOTTO_DUPLICATE: '[ERROR] 로또 번호에 중복된 숫자가 있으면 안된다.',
  BONUS_DUPLICATE: '[ERROR] 보너스 번호는 로또 번호와 중복될 수 없다',
});

export const LOTTO = Object.freeze({
  START: 1,
  END: 45,
  LENGTH: 6,
});
