from fastapi import APIRouter

router = APIRouter(prefix="/board", tags=["보드"])


@router.get(path="")
def board():
    return {"보드1"}


@router.post(path="")
def board():
    return {"안녕하시와요"}


@router.put(path="")
def board():
    return {"녕안해?"}


@router.delete(path="")
def board():
    return {"해해해"}
